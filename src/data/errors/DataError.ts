export default class ApiError extends Error {
  public statusCode: number
  public details?: unknown

  constructor(message: string, statusCode: number = 500, details?: unknown) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode
    this.details = details
  }
}
