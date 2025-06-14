import type { PokemonBase } from '../models/Pokemon'
import type Pokemon from '../models/Pokemon'

export interface PokemonRepository {
  getPokemonList(
    offset: number,
  ): Promise<{ pokemon: PokemonBase[]; nextPokemons: number | undefined }>
  getPokemonDetailByName(name: Pokemon['name']): Promise<Pokemon>
}
