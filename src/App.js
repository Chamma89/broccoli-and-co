import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
