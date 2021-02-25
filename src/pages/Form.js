import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SelectedList from "../components/SelectedList";
import Missions from '../components/Missions/Missions';
import nsvlogo from '../nsv_logo.png';

const Form = (props) => {
  const [search, setSearch] = useState("");
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [idCount, setIdCount] = useState(0);
  

  const handleInputChange = event => {
    const value = event.target.value;
    setSearch( value )
  }

  const handleSearchSubmit = event => {
    event.preventDefault();
    //alreadyExists will change to true if the behavior is found in the selectedBehaviors array
    let alreadyExists = false;
    selectedBehaviors.forEach(behavior => {
      if (behavior.value === search.toLowerCase() && search.trim() !== "") {
        alreadyExists = true;
      }
    })
    if (alreadyExists === false) { 
      if (search.length > 0){
        setSelectedBehaviors( selectedBehaviors.concat({value : search.toLowerCase(), id: idCount}));
        setIdCount(idCount+1);
      }
    };
  }

  const removeBehavior = id => {
    const behaviors = selectedBehaviors.filter(behavior => behavior.id !== id);
    setSelectedBehaviors(behaviors)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    //once the backend is live we'll need the code here to submit our selected behaviors
  }

  return (
    <section className="mainframe">
      <h1>Welcome to Lantern</h1>
      <img src={nsvlogo} alt={'NSV Logo'} width={"150px"} style={{marginBottom: "40px" }}/>
      <p>Have you seen behavioural changes in your child and you want to know if such behaviours could
          trigger any type of violence? <br/><br/>
          Enter the words you think may fit with your child's behaviour:
      </p>
      <SearchBar 
        handleInputChange={handleInputChange}
        value={search}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div style={{ opacity: selectedBehaviors.length ? 1 : 0}}>
        <ul className="list-group">Selected behaviors (double click to remove from list):
          { selectedBehaviors.map(behavior => (
            <SelectedList
              id={behavior.id}
              key={behavior.id}
              value={behavior.value}
              removeBehavior={removeBehavior}
            />
          ))}
        </ul>

        {/*<form action="">
          <input type="text" id="keywords" name="key_vals" placeholder="angry, boredom, violent"/>
        </form>*/}
        <Link 
          className="navbar-brand" 
          to="/results"
        >
            <button>Submit</button>
            {/*After filling the form we'll submit the behavior traits to the backend, get the matches and then display them on the following page*/}
        </Link>
      </div>
    </section>
  )
}

export default Form
