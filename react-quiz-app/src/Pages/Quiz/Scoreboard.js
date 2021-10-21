import { Redirect } from 'react-router-dom'

const Scoreboard = ({ points, streak, lives, skips }) => {

    
    return (
      <div className="jumbotron bg-secondary text-center">
          <div className="container">
              <div className="ht-tm-header">
                  <h3 className="display-3">Scorebaord</h3>
                  <span className="lead text-primary">Total Points: { points } </span>
                  <span className="lead text-primary">Hot Streak: { streak - 1 } </span>
                  { lives > 0 ? <span className="lead text-primary">Lives Left: { lives } </span>: <Redirect to="/results"/> }
                  <span className="lead text-primary">Skips Left: { skips } </span>
              </div>
          </div>
      </div>
    )
  }
  
  export default Scoreboard
  