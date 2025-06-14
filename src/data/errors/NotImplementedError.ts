import DataError from './DataError'

export class NotImplementedError extends DataError {
  constructor(method: string = '') {
    super(method ? `${method} is not implemented.` : 'Not implemented.', 501)
  }
}
