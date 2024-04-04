import PropTypes from "prop-types"
function PokemonCards({pokemon}){
    return (<figure>{pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>???</p>}
    <figcaption>{pokemon.name}</figcaption>
    </figure>)   
}

PokemonCards.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        imgSrc: PropTypes.string
    }).isRequired
}

export default PokemonCards;