import logo from './logo.svg';
import './App.css';
// import PokemonFetch from './components/PokemonFetch';
import PokemonFetchAxios from './components/PokemonFetchAxios';

function App() {
  return (
    <div className="App container">
      {/* <PokemonFetch></PokemonFetch> */}
      <PokemonFetchAxios></PokemonFetchAxios> 
    </div>
  );
}

export default App;
