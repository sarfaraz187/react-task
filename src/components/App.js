import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Forum from "./Forum";
import ListData from "./ListData";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <button>
            <Link to="/forum">To Forum</Link>
          </button>
          <button>
            <Link to="/listData">To ListDat</Link>
          </button>
          <Switch>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/listData">
              <ListData />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
