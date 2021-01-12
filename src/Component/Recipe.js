import React from "react";
import "./Recipe.css";

const Recipe = ({title,calories,image, ingredients}) => {
    return (
        <div className="MenuCard">
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}
                        <a href={ingredient.image}> Image</a>
                    </li>

                ))}
            </ol>
            <p>Calories:-{calories}</p>
        </div>
    )
}

export default Recipe;
