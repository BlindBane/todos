const baseUrl = '/api/todos'

export const loadTodos = () => {
  return fetch(baseUrl).then(res => res.json())
}

export const postNewTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: todo
  })
  .then(res => res.json())
}
