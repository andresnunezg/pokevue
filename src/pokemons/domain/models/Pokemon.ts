import PokemonType from './PokemonType'
import PokemonPhysicalAttributes from './PokemonPhysicalAttributes'
import { PokemonError, PokemonTypeError } from '../errors'

export class PokemonBase {
  constructor(
    public id: number,
    public name: string,
  ) {}
}

export default class Pokemon extends PokemonBase {
  constructor(
    public id: number,
    public name: string,
    public physicalAttributes: PokemonPhysicalAttributes,
    public types: PokemonType[],
    public frontDefaultArtwork: string,
  ) {
    super(id, name)
    this.validate()
  }

  private validate(): void {
    this.validateId()
    this.validateName()
    this.validateTypes()
  }

  private validateId(): void {
    if (!Number.isInteger(this.id)) {
      throw new PokemonError('Pokemon ID must be an integer')
    }
    if (this.id <= 0) {
      throw new PokemonError('Pokemon ID must be greater than 0')
    }
  }

  private validateName(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new PokemonError('Pokemon name cannot be empty')
    }
    if (this.name.length > 100) {
      throw new PokemonError('Pokemon name exceeds maximum length')
    }

    if (!/^[a-zA-Z0-9\s-]+$/.test(this.name)) {
      throw new PokemonError('Pokemon name contains invalid characters')
    }
  }

  private validateTypes(): void {
    if (!this.types || this.types.length === 0) {
      throw new PokemonTypeError('Pokemon must have at least one type')
    }
  }

  get getInfoAsCsv(): string {
    const { height, weight } = this.physicalAttributes
    const separator = ','
    const types = this.types.map((t) => t.name).join(';')
    const headers = ['name', 'height', 'weight', 'types', 'imageUrl'].join(separator)
    const basicInfo = [this.name, height, weight, types, this.frontDefaultArtwork].join(separator)
    return `${headers}\r\n${basicInfo}`
  }
}
