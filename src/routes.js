import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Page2 from "./pages/Page2/index";

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/persona' exact component={Page2} />
    </Switch>
  );
}
