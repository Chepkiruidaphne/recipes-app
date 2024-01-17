import React from 'react'

function RecipeDetails({pageName, home, about, contact, title, category, latestRecipes, timeDuration, foodImage, foodName, recipeOwner, popularity}) {
  return (
    <>
    <div>
      <h4>{pageName}</h4>
      <div>
      <a href={home}>Home</a>
      </div>
      <div>
      <a href={about}>About</a>
      </div>
      <div>
      <a href={contact}>Contact</a>
      </div>
    </div>
    <div>
        <button type="button">LOG IN</button>
        <button type="button">SIGN UP</button>
        <h1>{title}</h1>
        <p>{category}</p>
        <p>{latestRecipes}</p>
    </div>
    <div>
        <p>{timeDuration}</p>
        <img src={foodImage} alt="" />
        <p>{foodName}</p>
        <p>{recipeOwner}</p>
        <p>{popularity}</p>
    </div>
    <div>
       <button type="button">LOAD MORE</button> 
    </div>
    </>
  )
}

export default RecipeDetails
