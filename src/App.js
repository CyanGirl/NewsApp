import React from "react";
import { Route, Link } from "react-router-dom";
import News from "./News";
import Details from "./Details";
import Open from "./open";
import { Contxt } from "./Context";

const App = (props) => {
  return (
    <Contxt>
      <div>
        <Route exact path="/News" component={News}></Route>
        <Route path="/News/:id" component={Details}></Route>
        <Route exact path="/" component={Open}></Route>
      </div>
    </Contxt>
  );
};
export default App;
