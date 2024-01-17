import React from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe() {
  return (
    <>
    <div>
        <RecipeDetails 
        pageName="FOOD NINJA"
        home="https://cdpn.io/solygambas/fullpage/bGqpPJJ?anon=true&view=fullpage#"
        about="https://cdpn.io/solygambas/fullpage/bGqpPJJ?anon=true&view=fullpage#"
        contact="https://cdpn.io/solygambas/fullpage/bGqpPJJ?anon=true&view=fullpage#"
        title="Recipes"
        category="For Ninjas"
        latestRecipes="Latest Recipes"
        timeDuration="25 MINS"
        foodImage="https://i.ibb.co/tpCdNcX/stew.jpg"
        foodName="5 Bean Chilli Stew"
        recipeOwner="Recipe by Mario"
        popularity="Most Popular"
        />
        <RecipeDetails 
        timeDuration="15 MINS"
        foodImage="https://i.ibb.co/b1DQyfG/noodles.jpg"
        foodName="Veg Noodles"
        recipeOwner="Recipe by Mario"
        />
        <RecipeDetails 
        timeDuration="30 MINS"
        foodImage="https://i.ibb.co/ZdP6cKQ/curry.jpg"
        foodName="Tofu Curry"
        recipeOwner="Recipe by Mario"
        />
      
    </div>
    </>
  )
}

export default Recipe
