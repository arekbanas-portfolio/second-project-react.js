import React, {Component} from 'react';
import { SemipolarLoading } from 'react-loadingg';
import {Link} from 'react-router-dom';

class RecipeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            error: false,
            loader: false
        }
    }

    getRecipe = (e) => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        const quantity = e.target.elements.quantity.value;
        const APIKey = 'e11d242856524e09ac25fee61073385b';
        const API = `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=${quantity}&apiKey=${APIKey}`;
        
        fetch(API)
        .then(response => {
            if(response.ok) {
                return response
            }
            throw Error("Błąd połączenia")
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                loader: true
            })
            setTimeout(() => {
            this.setState({
                loader: false
                })
            }, 1000)
            this.setState({
                recipes: response.results
            })
        })
        .catch(error => {
            this.setState({
                error: true
            })
        })
    }

    componentDidMount() {
        const json = localStorage.getItem("recipes")
        const recipes = JSON.parse(json)
        if (recipes !== null) {
            this.setState({
                recipes
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem("recipes", JSON.stringify(this.state.recipes))
    }

    render() { 
        const {recipes, error, loader} = this.state;
        return ( 
            <> 
            <div className="recipe-app">
                <h2>Recipe App</h2>
                <h3>When entering the appropriate ingredient, sample recipes will be shown accordingly. The API is from a foreign server, also the names must be in English.</h3>
            </div>
            <div className="recipe-app__search">
                <form onSubmit={this.getRecipe}>
                    <input type="text" name="recipeName" placeholder="chicken, salat..."/>
                    <input type="number" name="quantity" placeholder="how much recipes?"/>
                    <div className="recipe-app__center-btn">
                    <button className="recipe-app__button">SEARCH</button>
                    </div>
                </form>
            </div>
            {loader ? <SemipolarLoading color="rgba(0,0,0,0.8)" size="large"/> : <div className="recipe-app__recipes">
                {recipes.map(recipe => {
                    if (!error) {
                        return (
                            <div className="recipe" key={recipe.id}>
                                <img 
                                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} 
                                alt={recipe.title}/>
                                <h4>{recipe.title.length > 20 ? recipe.title.substr(0,20) + "..." : recipe.title}</h4>
                                <p>Ready in minutes: {recipe.readyInMinutes}</p>
                                <p>Servings: {recipe.servings}</p>
                                <button className="recipe-app__button">
                                    <Link to={`/recipe/${recipe.id}`}>SHOW MORE
                                    </Link>
                                </button>
                            </div>
                        )
                        } else {
                            return (
                            <div className="recipe recipe__error">
                                <h4>CONNECTING ERROR!</h4>
                            </div>
                            )
                        }
                }   )}
            </div>}  
            </>
        );
    }
}
 
export default RecipeApp;