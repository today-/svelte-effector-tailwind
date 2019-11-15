export async function request(url, params) {
  return fetch(`https://node-hnapi.herokuapp.com/${url}`, params).then(r => r.json())
}
