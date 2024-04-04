
function NavBar({pokemonIndex,setPokemonIndex, pokemonList}){

    const handleClick = (event) => {
  
        event.target.textContent === 'Précédent' ? setPokemonIndex(pokemonIndex-1): setPokemonIndex(pokemonIndex+1);
         }
    return(
        <div>
            {pokemonIndex > 0 ? <button onClick = {handleClick}>Précédent</button> : <button onClick = {handleClick} disabled>Précédent</button>}
            {pokemonIndex < pokemonList.length-1 ? <button onClick = {handleClick}>Suivant</button>: <button onClick = {handleClick} disabled >Suivant</button> }
            <p>{pokemonIndex+1}</p>
      </div>
    )
}

export default NavBar