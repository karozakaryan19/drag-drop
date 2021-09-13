import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { pageList } from "./utils";

const App = () => {
  const renderPage = pageList.map((el) => el)
  return (
    <Router>
      <Switch>
        {renderPage}
      </Switch>
    </Router>
  )
};

export default App;
