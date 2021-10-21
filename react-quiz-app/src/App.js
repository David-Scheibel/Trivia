import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import { Component } from "react";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Results/Results'
import Submit from './Pages/Submit/Submit'

const API = "http://localhost:9292/quiz/"
const APIResults = "http://localhost:9292/results/"

class App extends Component {
  
    state = {
        name: "",
        questions: [],
        question: 0,
        position: 0,
        points: 0,
        streak: 1,
        lives: 5,
        skipsLeft: 3,
        wasCorrect: null,
        answer: ""
    }

    componentDidMount() {
        fetch(API)
        .then(r => r.json())
        .then(q=> this.setState({
            questions: q
        }))
    }

    setName = (name) => {this.setState({name: name})}

    correctAnswer = (e) => {this.setState({points: this.state.points + 10 * this.state.streak, 
                                           streak: this.state.streak + 1, 
                                           position: this.state.position + 1,
                                           wasCorrect: true,
                                           answer: e }, () => {
                                           this.updateResults()})}

    incorrectAnswer = (e) => {this.setState({streak: 1, points: this.state.points - 20, 
                                             position: this.state.position + 1,
                                             lives: this.state.lives - 1,
                                             wasCorrect: false,
                                             answer: e }, () => {
                                             this.updateResults()})}

    skipQuestion = () => {this.setState({position: this.state.position + 1, 
                                         skipsLeft: this.state.skipsLeft - 1})}

    gameOver = () => {
        if(this.state.lives == 0){
            console.log("the game is over")
        }
    }

    updateQuestion = (question) => this.setState({question: question})

    pushNewQuestion = (newQuestion) => this.setState({questions: [...this.state.questions, newQuestion]})

    updateResults = () => {

        const result = {
            choice: this.state.answer,
            was_correct: this.state.wasCorrect,
            question_id: this.state.question,
            score: this.state.points,
            streak: this.state.streak
        }
        
        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(result)
        }

        fetch(APIResults, reqObj)
            .then(r => r.json())     
            .catch(() => alert("submit error"))
    }


    render () {
    

        const questionsCopy = [...this.state.questions]
        const questionMap = questionsCopy.slice(this.state.position, this.state.position + 1)


        return (
            <BrowserRouter>
                <div className="App">  

                    <Header/>

                    <Switch>

                    <Route path='/' exact> 
                        <Home 
                        name={this.state.name} 
                        setName={this.setName}
                        />
                    </Route>

                    <Route path='/quiz' exact> 
                        <Quiz
                            questions={questionMap}
                            position={this.state.position}
                            points={this.state.points}
                            streak={this.state.streak}
                            lives={this.state.lives}
                            skipsLeft={this.state.skipsLeft}
                            wasCorrect={this.state.wasCorrect}
                            answer={this.state.answer}
                            correctAnswer={this.correctAnswer}
                            incorrectAnswer={this.incorrectAnswer}
                            skipQuestion={this.skipQuestion}
                            updateQuestion={this.updateQuestion}
                            updateResults={this.updateResults}
                        />  
                    </Route>

                    <Route path='/results' exact> 
                        <Result/>
                    </Route>

                    <Route path='/submit' exact> 
                        <Submit 
                            questions={this.state.questions}
                            pushNewQuestion={this.pushNewQuestion}
                        />
                    </Route>

                    </Switch>
                </div>  

                <Footer/>

            </BrowserRouter>
        )
    }
}

export default App;
