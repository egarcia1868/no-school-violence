import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Form from "./pages/Form";
import Results from "./pages/Results";

function App() {
  return (
    <main className="App">
      <Router>
        <div>
        {/* <Header/> will display the Header component  */}
          <Header/>
          {/* The <Route/> elements will display the appropriate page based on the current URL*/}
          <Route exact path="/" component={Form}/>
          <Route exact path="/results" component={Results}/>
        </div>
      </Router>
    </main>
  );
}

export default App;
