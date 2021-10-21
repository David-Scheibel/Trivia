import React from 'react';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react"
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import "./Home.css";
import { blue } from '@material-ui/core/colors';

const Home = ({name, setName, fetchQuestions})=> {
     
  const [number, setNumber] = useState(0);
  const history = useHistory();
  

  // const handleclickSubmit = ()=> {
  //     fetchQuestions ();
  //     history.push("/quiz");
  // }

    return (
      <div className= "content">
        <div className = "Settings">
          <span style ={{ fontSize: 25,
          fontColor: blue}}>Quiz Settings</span>
          <div>
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
          />

          <div className="search_categories">
              <div className = "select">
            <select name = "search_categories" id = "search_categories" onChange = {(e)=> setNumber(e.target.value)}   style={{ marginBottom: 30 }}>
              <option value = "n/a">Difficulty</option>
              <option value = "1">Easy</option>
              <option value = "2">Medium</option>
              <option value = "3">Hard</option>
            </select>
            </div>
          </div>

          <div>
            <Link to="/quiz">
              <Button variant= "contained" color ="primary" size ="large"
                      // onClick={handleclickSubmit}
                      >
                      Start Quiz
              </Button>
            </Link>
          </div>
          </div>
        </div>
        <img src = "https://i.imgur.com/28gPvRj.png" classsname="banner" alt="quiz img"/>
        {/* <img src = "undraw_online_test_gba7.svg" classsname="banner" alt="quiz img"/> */}
      </div>
    )
};

export default Home;