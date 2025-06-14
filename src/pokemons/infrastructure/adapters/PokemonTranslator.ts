import Pokemon, { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import type { PokemonBaseDto, PokemonDto, PokemonTypeDto } from './PokemonDto'
import type PokemonPhysicalAttributes from '@/pokemons/domain/models/PokemonPhysicalAttributes'
import PokemonType from '@/pokemons/domain/models/PokemonType'

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

  static extractIdFromUrl(url: string): number | undefined {
    const idOrNull = url.split('/').filter(Boolean).pop()
    if (idOrNull) {
      return Number(idOrNull)
    }
  }
}

export class PokemonTranslator {
  static toDomain(dto: PokemonDto): Pokemon {
    const physicalAttributes = {
      height: dto.height,
      weight: dto.weight
    } as PokemonPhysicalAttributes
    return new Pokemon(
      dto.id,
      dto.name,
      physicalAttributes,
      PokemonTypeTranslator.toDomainList(dto.types.map(t => t.type))
    )
  }
}

class PokemonTypeTranslator {
  static toDomain(dto: PokemonTypeDto): PokemonType {
    return new PokemonType(
      PokemonBaseTranslator.extractIdFromUrl(dto.url) ?? 0,
      dto.name
    )
  }

  static toDomainList(dtos: PokemonTypeDto[]): PokemonType[] {
    return dtos.map(this.toDomain)
  }
}
