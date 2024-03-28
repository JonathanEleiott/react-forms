import { useState, useEffect } from 'react';
import UnorderedPokemonList from './UnorderedPokemonList.jsx';
import './App.css'

const App = () => {
  const API_BASE_URL = "https://pokeapi.co/api/v2/";
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [pokemonUrlInput, setPokemonUrlInput] = useState("");

  useEffect(() => {
    const getPokemon = async() => {
      const response = await fetch(`${API_BASE_URL}pokemon`);
      const json = await response.json();
      const top20Pokemon = json.results;
      setPokemonList(top20Pokemon);
    }

    getPokemon();
  }, []);

  // const onInputChange = (event) => {
  //   if(event.target.name === "newPokemonName") {
  //     setPokemonNameInput(event.target.value);
  //   } else if (event.target.name === "newPokemonUrl") {
  //     setPokemonUrlInput(event.target.value);
  //   }
  // }

  // const onPokemonNameChange = (event) => {
  //   setPokemonNameInput(event.target.value);
  // }

  // const onPokemonUrlChange = (event) => {
  //   setPokemonUrlInput(event.target.value)
  // }

  const onPokemonFormSubmit = (event) => {
    event.preventDefault();
    setPokemonList([...pokemonList, { name: pokemonNameInput, url: pokemonUrlInput }]);
  }
  

  return (
    <>
      <h1>Pokemon Form</h1>

      {
        pokemonDetails.name ? 
          <>
            <p>{pokemonDetails.name}</p>

            <button onClick={() => setPokemonDetails({})}>Back</button>
          </> : 
          <>
            <form onSubmit={onPokemonFormSubmit}>
              <input placeholder="pokemon name" name="newPokemonName" onChange={(event) => setPokemonNameInput(event.target.value)}/>
              <input placeholder="pokemon url" name="newPokemonUrl" onChange={(event) => setPokemonUrlInput(event.target.value)}/>
              <button>Submit New Pokemon</button>
            </form>
            
            { pokemonList.length ? <UnorderedPokemonList pokemonList={pokemonList} setPokemonDetails={setPokemonDetails}/> : <p>Loading...</p> }  
          </>
      }
    </>
  )
}

export default App
