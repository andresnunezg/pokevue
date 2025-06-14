import { PokemonError } from '../errors'
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

  getPokemonDetailByName = async (name: Pokemon['name']): Promise<Pokemon> => {
    if (name.trim().length === 0) throw new PokemonError('Pokemon name cannot be empty')
    return this.pokemonRepository.getPokemonDetailByName(name.trim())
  }
}
