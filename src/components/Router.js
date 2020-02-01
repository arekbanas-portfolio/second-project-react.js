import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import RecipeApp from './RecipeApp';
import Recipe from './Recipe';
import { LoopCircleLoading } from 'react-loadingg';
import { Preloader, Placeholder } from 'react-preloading-screen';

const Router = () => {
    return (
        <Preloader>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/recipe-app" component={RecipeApp}/>
                <Route path="/recipe/:id" component={Recipe}/>
            </Switch>
        </BrowserRouter>
        <Placeholder>
        <span><LoopCircleLoading color="rgba(0,0,0,0.8)" size="large"/></span>
        </Placeholder>
        </Preloader>
     );
}
 
export default Router;