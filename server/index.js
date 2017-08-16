const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let todos = [
  {
    id: 1,
    name: 'Get a pizza',
    isComplete: false
  }
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/api/todos', function (req, res) {
  res.json(todos)
})

app.post('/api/todos', function (req, res) {
  todos.push(req.body)
  res.json('Todo Added!')
})

app.put('/api/todos', function (req, res) {
  var copy = req.body
  todos[todos.findIndex(todo => todo.id === copy.id)] = copy

  res.json('Todo updated!')
})

app.delete('/api/todos', function (req, res) {
  var doomedTodoIndex = todos.findIndex(todo => todo.id === req.body.id)
  todos = [
    ...todos.slice(0, doomedTodoIndex),
    ...todos.slice(doomedTodoIndex + 1)
  ]
  console.log(todos)
  res.json('Todo Delted!')
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
