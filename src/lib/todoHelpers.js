export const addTodo = (todos, newItem) => todos.concat(newItem)

export const newId = () => Math.floor(Math.random() * 1000000)

export const findById = (id, todos) => todos.find(todo => todo.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (todos, updatedTodo) => {
  const updatedIndex = todos.findIndex(todo => todo.id === updatedTodo.id)
  return [
    ...todos.slice(0, updatedIndex),
    updatedTodo,
    ...todos.slice(updatedIndex + 1)
  ]
}
