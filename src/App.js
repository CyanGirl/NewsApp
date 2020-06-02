import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from "./News";
import Details from "./Details";
import Open from "./open";

const App = (props) => {
  return (
    <div>
      <Route exact path="/News" component={News}></Route>
      <Route path="/News/:id" component={Details}></Route>
      <Route exact path="/" component={Open}></Route>
    </div>
  );
};
export default App;
