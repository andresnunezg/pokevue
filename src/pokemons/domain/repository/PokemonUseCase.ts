import type { PokemonBase } from '../models/Pokemon'
import type Pokemon from '../models/Pokemon'
import type { PokemonRepository } from './PokemonRepository'

export class PokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  getPokemonList = async (
    offset: number,
  ): Promise<{ pokemon: PokemonBase[]; nextPokemons: number | undefined }> => {
    return await this.pokemonRepository.getPokemonList(offset)
  }

  getPokemonDetailById = async (): Promise<Pokemon> => {
    return this.pokemonRepository.getPokemonDetailById()
  }
}
