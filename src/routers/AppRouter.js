import React, {useContext} from "react";import { LoginScreen } from "../login/LoginScreen";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { DashBoardRouter } from "./DashBoardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";



export const AppRouter = () => {

  const { user } = useContext(AuthContext)

    return (
        <Router>
      <div>

        <Switch>
          <PublicRoute 
                    isAuthenticated = {user.logged} 
                    path="/login" 
                    component={LoginScreen} />
          <PrivateRoute           
                    path="/" 
                    isAuthenticated = {user.logged}
                    component={DashBoardRouter} />
        </Switch>
      </div>
    </Router>
    )
}
