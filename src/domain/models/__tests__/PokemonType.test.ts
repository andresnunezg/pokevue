import { describe, it, expect } from 'vitest'
import PokemonType from '../PokemonType'
import { PokemonTypeError } from '../../errors'

describe('PokemonType', () => {
  describe('Creating a new Pokemon type', () => {
    it('should create a valid Pokemon type', () => {
      const validId = 1
      const validName = 'Electric'

      const pokemonType = new PokemonType(validId, validName)

      expect(pokemonType.id).toBe(validId)
      expect(pokemonType.name).toBe(validName)
    })

    it('should throw error when name is empty', () => {
      const validId = 1
      const emptyName = ''

      expect(() => new PokemonType(validId, emptyName)).toThrowError(
        new PokemonTypeError('PokemonType name cannot be empty'),
      )
    })

    it('should throw error when name contains only whitespace', () => {
      const validId = 1
      const whitespaceOnlyName = '   '

      expect(() => new PokemonType(validId, whitespaceOnlyName)).toThrowError(
        new PokemonTypeError('PokemonType name cannot be empty'),
      )
    })
  })
})
