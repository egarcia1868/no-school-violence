import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Form = (props) => {
  const [search, setSearch] = useState("");
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);

  const handleInputChange = event => {
    const value = event.target.value;
    setSearch( value )
  }

  const handleSearchSubmit = event => {
    event.preventDefault();
    //at this point I will need to move the entered behavior into the box on the right
    
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    //once the backend is live we'll need the code here to submit our selected behaviors
  }

  return (
    <section className="mainframe">
      <h1>Welcome to Lantern</h1>
        <p>Have you seen behavioural changes in your child and you want to know if such behaviours could
            trigger any type of violence? <br/><br/>
            Enter the words you think may fit with your child's behaviour:
        </p>
        <SearchBar 
          handleInputChange={handleInputChange}
          value={search}
          handleSearchSubmit={handleSearchSubmit}

        />

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