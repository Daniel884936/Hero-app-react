import React from "react";import { LoginScreen } from "../login/LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DashBoardRouter } from "./DashBoardRouter";



export const AppRouter = () => {
    return (
        <Router>
      <div>

        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashBoardRouter} />
        </Switch>
      </div>
    </Router>
    )
}
