import React from "react";
import Header from "./components/home/header/Header";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./components/pageContent/HomePages";
import Pages from "./components/pageContent/Pages";
import About from "./components/home/about/About";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path='/hakkimizda' exact component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
