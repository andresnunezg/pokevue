import { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import type PokemonBaseDto from './PokemonDto'

export class PokemonBaseTranslator {
  static toDomainList(dtos: PokemonBaseDto[]): PokemonBase[] {
    return dtos
      .map(PokemonBaseTranslator.toDomain)
      .filter((pokemon): pokemon is PokemonBase => !!pokemon)
  }

  static toDomain(dto: PokemonBaseDto): PokemonBase | undefined {
    const id = PokemonBaseTranslator.extractIdFromUrl(dto.url)
    if (!id) return
    return new PokemonBase(id, dto.name)
  }

  private static extractIdFromUrl(url: string): number | undefined {
    const idOrNull = url.split('/').filter(Boolean).pop()
    if (idOrNull) {
      return Number(idOrNull)
    }
  }
}
