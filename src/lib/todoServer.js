const baseUrl = '/api/todos'

export const loadTodos = () => {
  return fetch(baseUrl).then(res => res.json())
}
