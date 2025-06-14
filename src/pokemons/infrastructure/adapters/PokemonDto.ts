export interface PokemonBaseDto {
  url: string
  name: string
}

export interface PokemonTypeDto {
  name: string
  url: string
}

export interface PokemonDto {
  id: number
  name: string
  height: number
  weight: number
  types: Record<'type', PokemonTypeDto>[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
