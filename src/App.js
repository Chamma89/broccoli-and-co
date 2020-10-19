import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="page-container__content-wrap">
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
