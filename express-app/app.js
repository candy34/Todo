const express = require('express');
const bodyParser = require('body-parser');
const listDal = require('./dal');
const mustacheExpress = require('mustache-express');
const open = require('./open');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(function(request, response, next) {
//   next();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + "/views");

const todos = ["Wash the dogs", "Clean the house", "Change the light bulbs"];

var tasksCompleted = ["wash the dogs", "scoop the poop", "take out the trash"];

app.get("/", function(request, response) {
  response.render('todo', {
    todos: listDal.getOpenList(),
    tasksCompleted: (tasksCompleted)
  });
})
app.post("/", function(request, response) {
  if (request.body.todos) {
    todos.push(request.body.todos);
    response.redirect('/');
  } else {
    todos.splice(todos.indexOf(request.body.incomplete), 1);
    tasksCompleted.push(request.body.incomplete);
    response.redirect("/");
  }

});

app.listen(3000, function() {
  console.log('Successfully started express application!');
});
