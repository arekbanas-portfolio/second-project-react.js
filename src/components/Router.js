import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import RecipeApp from './RecipeApp';
import Recipe from './Recipe';

const Router = () => {
    return ( 
        <BrowserRouter basename="{process.env.PUBLIC_URL}">
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/recipe-app" component={RecipeApp}/>
                <Route path="/recipe/:id" component={Recipe}/>
            </Switch>
        </BrowserRouter>
     );
}
 
export default Router;