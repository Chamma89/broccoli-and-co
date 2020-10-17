import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <p>Broccoli & Co.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
