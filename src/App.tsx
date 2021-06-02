import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {RootReducerType} from './Store'
import {fetchPokenmonData} from './actions/PokenmonActions'

function App() {
  const [pokemonName,setPokemonName] = useState("")
  const pokemonReducer = useSelector((state:RootReducerType) => state.PokenmonReducer)
  const dispatch = useDispatch()
  
  const handlePokemonName = (e:React.ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value)
  const onClickSearchButton = ()=>{
    dispatch(fetchPokenmonData(pokemonName))
  }

  return (
    <div className="App">
      <input type="text" value={pokemonName} onChange={handlePokemonName} />
      <button onClick={onClickSearchButton}>포켓몬 찾기</button>
      {pokemonReducer.success && 
        <div>
          <p>{pokemonName}</p>
          {
            pokemonReducer.pokemon?.abilities.map((ability)=>{
              return <div>
                <p>{ability.ability.name}</p>
                <p>{ability.slot}</p>
              </div>
            })
          }
          <img src={pokemonReducer.pokemon?.sprites.front_default} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
