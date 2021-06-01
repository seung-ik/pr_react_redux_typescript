export const POKEMON_SUCCESS = "POKEMON_SUCCESS"
export const POKEMON_FAIL = "POKEMON_FAIL"

export type PokemonType = {
  abilities:PokemonAbility[],
  sprites: PokemonSprites
}

export type PokemonAbility = {
  ability: {
    name: string,
    url: string
  },
  is_hidden: boolean,
  slot: number
}

export type PokemonSprites = {
  front_default: string
}

export interface PokemonFailDispatch{
  type : typeof POKEMON_FAIL
}

export interface PokenmonSuccessDispatch{
  type : typeof POKEMON_SUCCESS,
  payload : {
    abilities: PokemonAbility[],
    sprites: PokemonSprites
  }
}

export type PokemonDispatchType = PokenmonSuccessDispatch | PokemonFailDispatch