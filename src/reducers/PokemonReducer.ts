import { POKEMON_FAIL, POKEMON_SUCCESS,PokemonType } from "../actions/PokenmonActiontypes"


interface initialState{
  success : boolean,
  pokemon? : PokemonType
}
const initialState:initialState={
  success : false
}

const PokenmonReducer = (state = initialState, action : any) : initialState => {
  switch(action.type){
    case POKEMON_SUCCESS:
      const { abilities, sprites} = action.payload
      return {
        ...state,
        success : true,
        pokemon : {
          abilities,
          sprites
        }
      }

    case POKEMON_FAIL:
      return {
        ...state,
        success : false
      }

    default:
      return state
  }
}

export default PokenmonReducer