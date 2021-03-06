import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Info from "./components/info";
import { Index } from "./components/ui";
import Browse from "./components/browse";
import Menu from "./components/menu";

let sizeMap = [2, 5, 10, 18, 30, 45];

function BrowseRouter({ match, location }) {
  return (
    <Menu>
      <Browse location={location} />
    </Menu>
  );
}

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Index} />
      <Route
        exact
        path="/info/"
        component={() => (
          <Menu>
            <Info />
          </Menu>
        )}
      />
      <Route path="/browse" component={BrowseRouter} />
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("ui"));

export { sizeMap };
