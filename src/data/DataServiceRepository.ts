export default interface DataServiceRepository {
  get<T>(url: string, queryParams: Record<string, string>, headers: HeadersInit): Promise<T>
  post(): Promise<void>
}
