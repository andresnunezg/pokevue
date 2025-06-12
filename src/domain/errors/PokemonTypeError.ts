export class PokemonTypeError extends Error {
  public code: string
  constructor(message: string) {
    super(message)
    this.code = "0003"
  }
}
