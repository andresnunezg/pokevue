import { describe, it, expect } from 'vitest'
import PokemonPhysicalAttributes from '../PokemonPhysicalAttributes'
import { PhysicalAttrError } from '../../errors'

describe('PokemonPhysicalAttributes', () => {
  describe('Creating physical attributes', () => {
    it('should create valid physical attributes', () => {
      const validHeight = 7
      const validWeight = 69

      const attributes = new PokemonPhysicalAttributes(validHeight, validWeight)

      expect(attributes.height).toBe(validHeight)
      expect(attributes.weight).toBe(validWeight)
    })

    it('should throw error when height is zero', () => {
      const zeroHeight = 0
      const validWeight = 69

      expect(() => new PokemonPhysicalAttributes(zeroHeight, validWeight))
        .toThrowError(new PhysicalAttrError('Height must be greater than 0'))
    })

    it('should throw error when weight is zero', () => {
      const validHeight = 7
      const zeroWeight = 0

      expect(() => new PokemonPhysicalAttributes(validHeight, zeroWeight))
        .toThrowError(new PhysicalAttrError('Weight must be greater than 0'))
    })

    it('should throw error when height is negative', () => {
      const negativeHeight = -1
      const validWeight = 69

      expect(() => new PokemonPhysicalAttributes(negativeHeight, validWeight))
        .toThrowError(new PhysicalAttrError('Height must be greater than 0'))
    })
  })
})
