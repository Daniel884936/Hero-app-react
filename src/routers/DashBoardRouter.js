import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../heroes/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from "../ui/Navbar";

export const DashBoardRouter = () => {
    return (
        <>
        <Navbar/>                    
        <div className="container mt-4">
            <Switch>
                <Route exact path="/marvel" component ={MarvelScreen} />
                <Route exact path="/hero/:heroId" component ={HeroScreen} />
                <Route exact path="/search" component ={SearchScreen} />                
                <Route exact path="/dc" component ={DcScreen} />
                <Redirect to="/marvel"/>
            </Switch>
        </div>
        </>
    )
}
