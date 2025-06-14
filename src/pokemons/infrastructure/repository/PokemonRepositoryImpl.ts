import HttpDataService from '@/data/DataService'
import type Pokemon from '@/pokemons/domain/models/Pokemon'
import { type PokemonBase } from '@/pokemons/domain/models/Pokemon'
import type { PokemonRepository } from '@/pokemons/domain/repository/PokemonRepository'
import type PokemonBaseDto from '../adapters/PokemonDto'
import { PokemonBaseTranslator } from '../adapters/PokemonTranslator'

export default class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private dataService = new HttpDataService()) {}

  async getPokemonList(
    offset: number,
  ): Promise<{ pokemon: PokemonBase[]; nextPokemons: number | undefined }> {
    const response = await this.dataService.get<{
      results: PokemonBaseDto[]
      next: string | undefined
    }>('pokemon', {
      limit: '50',
      offset: String(offset),
    })

    if (!response.results) return { pokemon: [], nextPokemons: undefined }

    let nextPokemons
    const url = new URL(response.next ?? '')
    if (url) {
      nextPokemons = parseInt(url.searchParams.get('offset') || '0')
    }
    return {
      pokemon: PokemonBaseTranslator.toDomainList(response.results),
      nextPokemons: nextPokemons,
    }
  }

  getPokemonDetailById(): Promise<Pokemon> {
    throw new Error('Method not implemented.')
  }
}
