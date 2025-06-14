import DataError from './DataError'

export class NotFoundError extends DataError {
  constructor(resource: string = '') {
    super(`${resource} not found`, 404)
  }
}
