import RadioButtons from './RadioButtons'
import "./Quiz.css"

const Card = (p) => {

  const arr = p.answer_category.incorrect_answers.map(i_a => i_a.incorrect_answer)
  const arr2 = p.answer_category.incorrect_answers

  const rand1 = arr[Math.floor(Math.random()*arr.length)]
  const rand2 = arr[Math.floor(Math.random()*arr.length)]
  const rand3 = arr[Math.floor(Math.random()*arr.length)]

  // const randomArr = arr.sort(() => .5 - Math.random())

  // const randomIndex = (r) => {
  //     return Math.floor(Math.random() * r.lengtth)
  // }

  // numArr = [0,1,2,3,4,5,6,7,8,9]
  // alphArr = [a,b,c,d,e,f,g,h,i,j]
  // newObj = [{num:0, alph:a}, {num:1, alph:b} ...]

  // for (var i = 0; i < 3; i++) {
  //     const removedItem = arr.splice(randomIndex(arr), 1);
  //     document.writeIn(removedItem)
  // }

  // const x = 3
  // const n = arr.length

  // const randomInts = (x, n) => {
  //   const array = []
  //   while(array.length < x) {
  //     const posInt = Math.floor(Math.random() * n) + 1
  //     if(array.indexOf(posInt) === -1) array.push(posInt)
  //   }
  //   return array
  // } 

  // const newArr = []

  // const randSamp = (arr2) => {
  //   if(newArr.length < 3) {
  //     for (const i = 0; i < 3; i++) newArr.push(i)
  //   }
  //   const randInt = Math.floor(Math.random() * newArr.length)

  //   const indexArr = newArr[randInt]

  //   newArr.splice(randInt, 1)
    
  //   return arr2[indexArr]
  // }

  // for (let prop in arr2) {
  //   let array = []
  //   console.log(arr2[prop].incorrect_answer)
  // }

  // debugger
  return (
    <div className="card-container">
      <div className="card-body">
      <p className="card-cat">Category: { p.answer_category.answer_category }</p>
          <h2 className="card-title">Question { p.question_id }: { p.question }?</h2>
          
        <div className="card-title">
           <RadioButtons
              correct_answer={p.correct_answer}
              answer_category={p.answer_category}
              correctAnswer={p.correctAnswer}
              incorrectAnswer={p.incorrectAnswer}
              skips_left={p.skips_left}
              skipQuestion={p.skipQuestion}
              rand1={rand1}
              rand2={rand2}
              rand3={rand3}
              question_id={p.question_id}
              updateQuestion={p.updateQuestion}
              updateResults={p.updateResults}
          />
      </div>
      <div>
          <p className="card-text">Points: { p.points }</p>
          </div>
    </div>
    </div>
  )
}

export default Card