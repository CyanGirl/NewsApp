import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from "./News";
import Details from "./Details";

const App = (props) => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={News}></Route>
        <Route path="/News/:id" component={Details}></Route>
      </Router>
    </div>
  );
};
export default App;
