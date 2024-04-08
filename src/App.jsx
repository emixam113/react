import { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'


function App() {
 
  useEffect(()=> {
    alert('Hello, pokemon trainer');
  }, [])

 

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = (event) => {
    
 }
 if(pokemonList[pokemonIndex].name ==="Pikachu"){
  alert("Pika, pika");
}


 

  return (
   <div>
  
    <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}></NavBar>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
  </div>
  );
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
    name: "Venusaur", 
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" //pokemon 3; 
  }, 
  {
    name: "Charmander",
    imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" // pokemon 4; 
  },
  {
      name:"Charmeleon", //pokemon 4; 
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",//pokemon 5
  },
  {
    name: "Charizard",
    imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" //pokemon 6
  },

  {
    name: "Pikachu", 
    imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" //pokemon 25
  }

];

export default App