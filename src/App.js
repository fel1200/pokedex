//import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import {Col, Spin} from 'antd';
//import {connect} from 'react-redux';
//Con selector y dispatch
import {useDispatch, useSelector} from 'react-redux';
import Searcher from './components/Searcher.jsx';
import PokemonList from './components/PokemonList.jsx';
import {getPokemons} from './api'
//Ponemos el as para que no se confunda con el setPokemons del state
import {getPokemonsWithDetails, setLoading} from './actions';
import logo from './statics/logo.svg'
import './App.css';

//Ahora se reciben pokemons y setpokemons del reducer provider
//Con hooks para redux
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

//function App({pokemons, setPokemons}) {
  //Quítamos esto para usar Reducer
  //const [pokemons, setPokemons] = useState([]);
  useEffect(() =>{
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons(); 
      //Para obtener sus detalles
      dispatch(getPokemonsWithDetails(pokemonsRes));
      //setPokemons(pokemonsRes);
      dispatch(setLoading(false));
    };
     fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} lat="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      
      {loading && <Col offset={12}>
        <Spin spinning size='large' />
      </Col>}
      
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}
/* Se puede usar esta forma o la que está abajo
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) =>  ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});*/

//export default connect(mapStateToProps, mapDispatchToProps)(App);


export default App;