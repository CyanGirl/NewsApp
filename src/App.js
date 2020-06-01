import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./News";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={News}></Route>
        <Route path="/News/:id" component={Details}></Route>
        {/*So this looks like news/id because we are going to have a path which directs from news and rendering component will be held in details */}
      </Router>
    </div>
  );
};
export default App;
