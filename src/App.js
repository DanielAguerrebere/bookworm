import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import CarsPage from "./components/pages/CarsPage";

const App  = () => (
    <div className={"ui container"}>
        <Route path={"/"} exact component = {HomePage} />
        <Route path={"/login"} exact component = {LoginPage} />
        <Route path={"/cars"} exact component = {CarsPage} />
    </div>);

export default App;
