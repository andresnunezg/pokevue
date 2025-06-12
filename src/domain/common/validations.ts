import { CoreError } from '../errors'

export function validateId(id: number) {
  if (!Number.isInteger(id)) {
    throw new CoreError('ID must be an integer')
  }
  if (id <= 0) {
    throw new CoreError('ID must be greater than 0')
  }
}
