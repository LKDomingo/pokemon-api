import React, { useState } from 'react'


const PokemonFetch = () => {

    const [pokeList, setPokeList] = useState([]);

    const fetchPokemon = () => {
        console.log('fetching Pokemon');
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.json())
            .then(response => {
                console.log(response.results)
                setPokeList(response.results);
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

export default PokemonFetch