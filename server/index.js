const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const todos = [
  {
    id: 1,
    name: 'Get a pizza',
    isComplete: false
  }
]

app.use('/', express.static('public'))

app.get('/api/todos', function (req, res) {
  res.json(todos)
})

app.post('/api/todos', function (req, res) {
  todos.push(req.body)
  res.send('Todo added!')
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
