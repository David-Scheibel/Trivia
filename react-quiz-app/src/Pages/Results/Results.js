import React from 'react';
import Scoreboard from "../Quiz/Scoreboard"
import { Component } from "react";

class  Results extends Component {

  render (){

    return (
    <div>
      Game Over !!
      <Scoreboard
      points={this.props.points}
      lives={this.props.lives}
      skips={this.props.skipsLeft}
      streak={this.props.streak}
      />
      </div>
    )
  }
}
export default Results