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
    body: JSON.stringify(todo)
  })
  .then(res => res.json())
}

export const putTodo = (todo) => {
  return fetch(`${baseUrl}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  .then(res => res.json())
}

export const deleteTodo = (todo) => {
  return fetch(`${baseUrl}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  .then(res => res.json())
}
