import { describe, it, expect, beforeEach } from 'vitest'
import PokemonType from '../PokemonType'
import { PokemonError, PokemonTypeError } from '../../errors'
import { PokemonBuilder } from './PokemonBuilder'

describe('Pokemon', () => {
  let pokemonBuilder: PokemonBuilder

  beforeEach(() => {
    pokemonBuilder = new PokemonBuilder()
  })

  describe('Creating a new Pokemon', () => {
    it('should create a valid Pokemon', () => {
      const validId = 25
      const validName = 'Pikachu'
      const validType = new PokemonType(13, 'Electric')

      const pokemon = pokemonBuilder
        .withId(validId)
        .withName(validName)
        .withTypes([validType])
        .build()

      expect(pokemon.id).toBe(validId)
      expect(pokemon.name).toBe(validName)
      expect(pokemon.types).toEqual([validType])
    })

    it('should throw error when id is not positive', () => {
      const invalidId = 0

      expect(() =>
        pokemonBuilder
          .withId(invalidId)
          .build()
      ).toThrowError(new PokemonError('Pokemon ID must be greater than 0'))
    })

    it('should throw error when name contains invalid characters', () => {
      const invalidName = 'Pikachu!'

      expect(() =>
        pokemonBuilder
          .withName(invalidName)
          .build()
      ).toThrowError(new PokemonError('Pokemon name contains invalid characters'))
    })

    it('should throw error when types array is empty', () => {
      const emptyTypes: PokemonType[] = []

      expect(() =>
        pokemonBuilder
          .withTypes(emptyTypes)
          .build()
      ).toThrowError(new PokemonTypeError('Pokemon must have at least one type'))
    })

    it('should create Pokemon with all attributes', () => {
      const pokemonData = {
        id: 25,
        name: 'Pikachu',
        height: 4,
        weight: 60,
        types: [new PokemonType(13, 'Electric')],
        artwork: 'https://example.com/pikachu.png'
      }

      const pokemon = pokemonBuilder
        .withId(pokemonData.id)
        .withName(pokemonData.name)
        .withPhysicalAttributes(pokemonData.height, pokemonData.weight)
        .withTypes(pokemonData.types)
        .withFrontDefaultArtwork(pokemonData.artwork)
        .build()

      expect(pokemon.id).toBe(pokemonData.id)
      expect(pokemon.name).toBe(pokemonData.name)
      expect(pokemon.physicalAttributes.height).toBe(pokemonData.height)
      expect(pokemon.physicalAttributes.weight).toBe(pokemonData.weight)
      expect(pokemon.types).toEqual(pokemonData.types)
      expect(pokemon.frontDefaultArtwork).toBe(pokemonData.artwork)
    })

    it('should generate correct CSV info', () => {
      const pokemon = pokemonBuilder.build()
      const expectedHeaders = 'name,height,weight,types,imageUrl'
      const expectedInfo = `Pikachu,4,60,Electric,https://example.com/pikachu.png`

      const csvInfo = pokemon.getInfoAsCsv

      expect(csvInfo).toBe(`${expectedHeaders}\r\n${expectedInfo}`)
    })
  })
})
