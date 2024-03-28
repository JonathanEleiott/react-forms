const UnorderedPokemonList = ({ pokemonList, setPokemonDetails }) => {

  return (
    <>
      <ul>
        {
          pokemonList.map((currentPokemon, index) => {
            return (
              <>
                <li key={index} onClick={() => setPokemonDetails(currentPokemon)}>{currentPokemon.name}</li>
                {/* <button onClick={() => setPokemonDetails(currentPokemon)}>See details</button> */}
              </>

            )
            
            

          })
        }
      </ul>
    </>
    
  )
}

export default UnorderedPokemonList
