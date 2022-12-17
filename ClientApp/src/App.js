import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Home from "./components/Home";
import Login from "./components/LoginRegisterScreens/Login"
import Register from "./components/LoginRegisterScreens/Register"
import HomePlanos from "./components/Home-Planos/home-planos";
import HomeSalas from "./components/Home-Salas";
import HomeQuadras from "./components/Home-Quadras"

export default function App() {
   return (
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/planos" component={HomePlanos} />
            <Route exact path="/salas" component={HomeSalas} />
            <Route exact path="/quadras" component={HomeQuadras} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/" />
         </Switch>
   );
}
