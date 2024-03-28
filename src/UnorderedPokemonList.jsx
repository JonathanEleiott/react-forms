const UnorderedPokemonList = ({ pokemonList, setPokemonList }) => {

  return (
    <ul>
      {
        pokemonList.map((currentPokemon, index) => {
          return <li key={index} onClick={() => setPokemonList([currentPokemon])}>{currentPokemon.name}</li>
        })
      }
    </ul>
  )
}

export default UnorderedPokemonList
