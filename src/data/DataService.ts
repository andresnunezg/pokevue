import type DataServiceRepository from './DataServiceRepository'
import { NotFoundError } from './errors/NotFoundError'
import { NotImplementedError } from './errors/NotImplementedError'

export default class HttpDataService implements DataServiceRepository {
  constructor(private baseUrl: string = import.meta.env.VITE_API_URL) {}

  async get<T>(
    url: string,
    queryParams: Record<string, string> = {},
    headers: HeadersInit = {},
  ): Promise<T> {
    const endpoint = `${this.baseUrl}/${url}`
    const urlWithParams = this.appendQueryParams(endpoint, queryParams)

    const response = await fetch(urlWithParams, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    if (response.status === 404) {
      throw new NotFoundError(endpoint)
    }

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    return response.json()
  }

  async post(): Promise<void> {
    throw new NotImplementedError('POST')
  }

  private appendQueryParams(url: string, params?: Record<string, string>): string {
    if (!params || Object.keys(params).length === 0) return url
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value)
    })

    return `${url}?${searchParams.toString()}`
  }
}
