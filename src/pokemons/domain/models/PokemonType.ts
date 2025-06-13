import { validateId } from '@/common/models/validations'
import { PokemonTypeError } from '../errors'

export default class PokemonType {
  constructor(
    public id: number,
    public name: string,
  ) {
    this.validate()
  }

  private validate() {
    validateId(this.id)
    this.validateTypeName()
  }

  private validateTypeName() {
    if (!this.name || this.name.trim().length === 0) {
      throw new PokemonTypeError('PokemonType name cannot be empty')
    }
  }
}
