import Pokemon from '../Pokemon'
import PokemonType from '../PokemonType'
import PokemonPhysicalAttributes from '../PokemonPhysicalAttributes'

export class PokemonBuilder {
  private id: number = 25
  private name: string = 'Pikachu'
  private physicalAttributes: PokemonPhysicalAttributes = new PokemonPhysicalAttributes(4, 60)
  private types: PokemonType[] = [new PokemonType(13, 'Electric')]
  private frontDefaultArtwork: string = 'https://example.com/pikachu.png'

  public withId(id: number): PokemonBuilder {
    this.id = id
    return this
  }

  public withName(name: string): PokemonBuilder {
    this.name = name
    return this
  }

  public withPhysicalAttributes(height: number, weight: number): PokemonBuilder {
    this.physicalAttributes = new PokemonPhysicalAttributes(height, weight)
    return this
  }

  public withTypes(types: PokemonType[]): PokemonBuilder {
    this.types = types
    return this
  }

  public withFrontDefaultArtwork(url: string): PokemonBuilder {
    this.frontDefaultArtwork = url
    return this
  }

  public build(): Pokemon {
    return new Pokemon(
      this.id,
      this.name,
      this.physicalAttributes,
      this.types,
      this.frontDefaultArtwork
    )
  }
}
