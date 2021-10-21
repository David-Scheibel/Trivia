import { Component } from 'react';

const API = "http://localhost:9292/submit/"

class Submit extends Component {

    state = {
        question_content: "",
        points: 10,
        correct_answer: "",
        answer_category_id: 0
    }

    submitTriviaQuestion = (e) => {
        e.preventDefault() 

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({...this.state})
        }

        fetch(API, reqObj)
            .then(r => r.json())
            .then((newQ) => {
                this.props.pushNewQuestion(newQ)
                this.setState({
                    question_content: "",
                    points: 10,
                    correct_answer: "",
                    answer_category_id: 0
                })
            })        
            .catch(() => alert("submit error"))
    }


    render() {

        const idAndCategoryObj = this.props.questions.map(q => q.answer_category)

        const parseObj = idAndCategoryObj.map(JSON.stringify)
        const combineObj = new Set(parseObj)
        const arrayObj = Array.from(combineObj, JSON.parse)

        const renderDropdownOption = () => {
            return arrayObj.map(a => 
                <option key={a.id} value={a.id}> {a.answer_category} </option>
            )
        }


        return (
            <div>
                <div className="bg-secondary text-center p-4">
                    <div className="container">
                        <div className="ht-tm-header">
                            <h3 className="display-5 p-3">Got a fun trivia question?</h3>
                            <span className="lead text-primary">Fill out this form and you could find your question here next time!</span>
                        </div>
                    </div>
                </div>
                
                <div className="form-container d-flex justify-content-center">
                    <form onSubmit={ (e) => this.submitTriviaQuestion(e) } className="form-column ml-4">
                        <input 
                            type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            placeholder="Submit Question"
                            onChange={ (e) => this.setState({question_content: e.target.value}) }
                            value={ this.state.question_content }
                        />

                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Question Answer"
                                onChange={(e) => this.setState({correct_answer: e.target.value})}
                                value={this.state.correct_answer}
                            />
                        </div>

                        <div className="input-group mb-2 mr-sm-2">
                            <select 
                                onChange={ (e) => this.setState({answer_category_id: e.target.value}) }
                                value={ this.state.question_category_id }
                                className="custom-select my-1 mr-sm-2">
                                    <option selected>Question Category</option>
                                    { renderDropdownOption() }
                            </select>
                        </div>
                
                        <button 
                            type="submit" 
                            className="btn btn-primary mb-2"
                            >Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit