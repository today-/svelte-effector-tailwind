export function request<T = any>(url: string, params?: RequestInit): Promise<T> {
  return fetch(`https://node-hnapi.herokuapp.com/${url}`, params).then(r => r.json())
}
