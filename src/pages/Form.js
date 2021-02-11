import React from "react";
import { Link } from "react-router-dom";

const Form = (props) => {

  return (
    <section className="mainframe">
      <h1>Welcome to Lantern</h1>
        <p>Have you seen behavioural changes in your child and you want to know if such behaviours could
            trigger any type of violence? <br/><br/>
            Enter the words you think may fit with your child's behaviour:
        </p>

      <form action="">
        <input type="text" id="keywords" name="key_vals" placeholder="angry, boredom, violent"/>
      </form>
      <Link 
        className="navbar-brand" 
        to="/results"
      >
        After filling the form we'll submit the behavior traits to the backend, get the matches and then display them on the following page
      </Link>
    </section>
  )
}

export default Form