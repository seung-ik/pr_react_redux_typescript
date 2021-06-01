import axios from 'axios'
import {Dispatch} from 'redux'
import {PokemonDispatchType, POKEMON_SUCCESS, POKEMON_FAIL} from './PokenmonActiontypes'

export const fetchPokenmonData = (pokenmonName:string)=> async (dispatch:Dispatch<PokemonDispatchType>)=>{
  try{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokenmonName}`)
    const data = res.data

    dispatch({
      type:POKEMON_SUCCESS,
      payload:data
    })
  }catch (err){
    dispatch({
      type:POKEMON_FAIL
    })
  }
}