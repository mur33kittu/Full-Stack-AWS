import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/common/home";
import About from "./components/common/about";
import Admin from "./components/common/admin";
import Learning from "./components/common/learning";

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/learning" component={Learning} />
        <Route exact path="/admin" component={Admin} />
      </div>
    </Router>
  );
};

export default router;
