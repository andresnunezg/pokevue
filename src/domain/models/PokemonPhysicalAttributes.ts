import { PhysicalAttrError } from "../errors"

export default class PokemonPhysicalAttributes {
  constructor(
    public height: number,
    public weight: number,
  ) {
    this.validate()
  }

  private validate() {
    this.validateHeight()
    this.validateWeight()
  }

  private validateHeight() {
    if (this.height <= 0) {
      throw new PhysicalAttrError("Height must be greater than 0")
    }
  }

  private validateWeight() {
    if (this.weight <= 0) {
      throw new PhysicalAttrError("Weight must be greater than 0")
    }
  }
}
