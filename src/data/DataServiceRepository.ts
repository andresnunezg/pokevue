export default interface DataServiceRepository {
  get<T>(
    headers: HeadersInit,
    queryParams: Record<string, string>,
    url: string
  ): Promise<T>
  post(): Promise<void>
}
