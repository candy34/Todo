let completed = require('./completed.js');
const todos = require('./todos.js');
function getTodos(){
  return todos

  }

function addTodos(item){
  open.push(item)
  return todos;
}
function completedTodos(itemId){
  completed.map(function(item){
    if(item.id == itemId){
      item.close = true;

      completed.push(item);
      return closed;
    }
  })
}
function getcompletedTodos(item){
  return completed;
}
function removeTodos(arr){
  const newTodo = todos.filter(function(person, idx, arr){
    return newTodo !== completed
    completed.push(arr)
  })
  console.log('completed')
}


module.exports = {
  addTodos: addTodos,
  completedTodos: completedTodos,
  getcompletedTodos: getcompletedTodos,
   removeTodos: removeTodos

}
