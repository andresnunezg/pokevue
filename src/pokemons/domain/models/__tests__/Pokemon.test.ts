import { describe, it, expect } from 'vitest'
import Pokemon from '../Pokemon'
import PokemonType from '../PokemonType'
import PokemonPhysicalAttributes from '../PokemonPhysicalAttributes'
import { PokemonError, PokemonTypeError } from '../../errors'

describe('Pokemon', () => {
  const validType = new PokemonType(1, 'Electric')
  const validAttributes = new PokemonPhysicalAttributes(4, 60)

  describe('Creating a new Pokemon', () => {
    it('should create a valid Pokemon', () => {
      const validId = 25
      const validName = 'Pikachu'

      const pokemon = new Pokemon(validId, validName, validAttributes, [validType])

      expect(pokemon.id).toBe(validId)
      expect(pokemon.name).toBe(validName)
      expect(pokemon.physicalAttributes).toBe(validAttributes)
      expect(pokemon.types).toEqual([validType])
    })

    it('should throw error when id is not positive', () => {
      const invalidId = 0
      const validName = 'Pikachu'

      expect(() => new Pokemon(invalidId, validName, validAttributes, [validType])).toThrowError(
        new PokemonError('Pokemon ID must be greater than 0'),
      )
    })

    it('should throw error when name contains invalid characters', () => {
      const validId = 25
      const invalidName = 'Pikachu!'

      expect(() => new Pokemon(validId, invalidName, validAttributes, [validType])).toThrowError(
        new PokemonError('Pokemon name contains invalid characters'),
      )
    })

    it('should throw error when types array is empty', () => {
      const validId = 25
      const validName = 'Pikachu'
      const emptyTypes: PokemonType[] = []

      expect(() => new Pokemon(validId, validName, validAttributes, emptyTypes)).toThrowError(
        new PokemonTypeError('Pokemon must have at least one type'),
      )
    })
  })

  describe('Getting Pokemon properties', () => {
    it('should return primary type correctly', () => {
      const pokemon = new Pokemon(25, 'Pikachu', validAttributes, [validType])

      const primaryType = pokemon.primaryType

      expect(primaryType).toBe(validType)
    })
  })
})
