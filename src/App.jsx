import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
 const handleClick = (event) => {
  
event.target.textContent === 'Précédent' ? setPokemonIndex(pokemonIndex-1): setPokemonIndex(pokemonIndex+1);
 }

  return (
   <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>

    {pokemonIndex > 0 ? <button onClick = {handleClick}>Précédent</button> : <button onClick = {handleClick} disabled>Précédent</button>}

    {pokemonIndex < pokemonList.length-1 ? <button onClick = {handleClick}>Suivant</button>: <button onClick = {handleClick} disabled >Suivant</button> }
      <p>{pokemonIndex}</p>

    </div>
  )
}

const pokemonList = [
  {
      name: "Bulbasaur", 
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", //pokemon 1;
  }, 
  {
    name: "Ivysaur", 
    imgSrc:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", //pokemon 2; 
  }, 
  {
    name: "Squirtle", 
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", //pokemon 3; 
  }, 
  {
    name: "Pikachu",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", // pokemon 4; 
  },
  {
      name:"Mew", //pokemon 4; 
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
  },

];

export default App