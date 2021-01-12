import { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Component/Recipe";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");


  const APP_ID = '54f5db8e';
  const APP_KEY = 'dce260470dd3f5aa66259d901161cc61';
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
      getRecipes();
    }, [query]);
  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }
  const controlSearch = e => {
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <form onSubmit={controlSearch} className="search-form">
        <input className="search-bar" type="text" onChange={updateSearch} />
        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
