import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/common/home";
import About from "./components/common/about";

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default router;
