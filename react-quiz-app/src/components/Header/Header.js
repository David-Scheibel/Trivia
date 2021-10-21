import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core"

const Header = ()=> {
    return (
        <div className= "header">
            <div>
                <Link to="/" className = "title" > Trivia </Link>
                <hr className = "divider"/>

                <div>
                    <Link to="/submit">
                        <Button variant="contained" color="secondary">
                            Submit Trivia
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header