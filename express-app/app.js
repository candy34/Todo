const express = require('express');
const bodyParser = require('body-parser');
const todosDal = require('./dal');
const mustache = require('mustache-express');
const urlencodedParser = bodyParser.urlencoded({extended: false});
// const open = require('./open');
const app = express();
const todos = require('./todos');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + "/views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

 const todo = ["Wash the dogs", "Clean the house", "Change the light bulbs"];

 const todosCompleted = ["wash the dogs", "scoop the poop", "take out the trash"];

app.get("/", function(request, response) {
  console.log('todos');
  response.render('todo', {todos: todos})
});

app.post('./todos', function(request, response) {
console.log(request.body.add)
todosDal.addTodos(request.body.add);
response.redirect('/');
});
// } else {
//   todos.splice(todos.indexOf(request.body.incomplete), 1);
//   tasksCompleted.push(request.body.incomplete);
//   response.redirect("/");
// }

// app.post('./todos', function(request, response) {
// todosDal.removeTodos(req.params);
// res.redirect('./completed')
//
// });
app.post("/", function(request, response) {
  if (request.body.todos) {
    todos.push(request.body.todos);
    response.redirect('/');
  } else {
    todos.splice(todos.indexOf(request.body.incomplete), 1);
    todosCompleted.push(request.body.incomplete);
    response.redirect("/");
  }

});
app.set('port', 3000)

app.listen(app.get('port'), function() {
console.log('Successfully started express application!')
});
