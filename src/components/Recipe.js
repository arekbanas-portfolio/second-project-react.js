import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipe: [],
            ingredients: []
         }
    }

componentDidMount() {
    const APIKey = 'e11d242856524e09ac25fee61073385b';
    const recipeInfo = `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?&apiKey=${APIKey}`;
        
    fetch(recipeInfo)
    .then(response => response.json())
    .then(response => {
        this.setState({
            recipe: response,
            ingredients: response.extendedIngredients
        })
    })
}

    render() {
        const {recipe, ingredients} = this.state; 
        return (
            <div className="active-recipe">
                <div className="recipe-app__recipes">
                    <div className="recipe">
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.image}/>
                        <div className="diets">
                            <h5>Vegetarian: {recipe.vegetarian ?
                            <i className="fa fa-check" aria-hidden="true"></i>
                            : <i className="fa fa-times" aria-hidden="true"></i>}</h5>
                                
                            <h5>Vegan: {recipe.vegan ?
                            <i className="fa fa-check" aria-hidden="true"></i>
                            : <i className="fa fa-times" aria-hidden="true"></i>}</h5>

                            <h5>Gluten free: {recipe.glutenFree ?
                            <i className="fa fa-check" aria-hidden="true"></i>
                            : <i className="fa fa-times" aria-hidden="true"></i>}</h5>

                            <h5>Dairy free: {recipe.dairyFree ?
                            <i className="fa fa-check" aria-hidden="true"></i>
                            : <i className="fa fa-times" aria-hidden="true"></i>}</h5>
                        </div>
                        <h4>Preparation time: {recipe.readyInMinutes > 60 ? Math.floor(recipe.readyInMinutes / 60) + " h, " + recipe.readyInMinutes % 60 + " mins" : recipe.readyInMinutes + " mins"}</h4>
                        <div className="ingredients">
                            <h4>Extended Ingredients:</h4>
                            {ingredients.map(ingredient => {
                                return (
                                    <div key={ingredient.id} className="ingredients__ingredient">
                                        <h5>{ingredient.name}</h5>
                                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredients.aisle}/>
                                    </div>
                                )
                            })}
                        </div>
                        <h4>Instructions:</h4>
                        <p>{recipe.instructions}</p>
                        <button className="recipe-app__button">
                            <Link to="/recipe-app">BACK TO RECIPES
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Recipe;