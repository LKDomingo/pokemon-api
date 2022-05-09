import React, { useState } from 'react'
import axios from 'axios'


const PokemonFetchAxios = () => {

    const [pokeList, setPokeList] = useState([]);

    const fetchPokemon = () => {
        console.log('fetching Pokemon');
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                console.log(response.data.results)
                setPokeList(response.data.results);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='p-2'>
            <button onClick={fetchPokemon} className="btn btn-primary">Fetch Pokemon</button>
            <hr />
            <ul>
                {
                    pokeList.map((pokemon, idx) => {
                        return (
                            <li key={idx}>{pokemon.name}</li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default PokemonFetchAxios