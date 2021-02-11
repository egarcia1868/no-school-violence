import React from "react";
import { Link } from "react-router-dom";

const Results = () => {

  return (
    <section className="mainframe">
      <h1>HERE IS WHERE WE'LL DISPLAY THE RETURNED DATA</h1>
      <Link 
        className="navbar-brand" 
        to="/"
      >
        go back to trait entry page
      </Link>
    </section>
  )
}

export default Results