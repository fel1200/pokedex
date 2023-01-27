import React from 'react'
import PokemonCard from './PokemonCard';
import '../styles/PokemonList.css';

function PokemonList({pokemons}) {
  console.log(pokemons);
  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name}/>;
        })}    
    </div>
  )
}

//Arreglo de 10 posiciones
//con un valor por default
PokemonList.defaultProps ={
    pokemons: Array(10).fill(''),
}

export default PokemonList