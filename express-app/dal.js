let todos = require('./todos');
let open = require('./open');
function getOpenList(itemId){
  return open.filter(function(item){
    return !item.close
  })
}
function addItem(item){
  const newItem = {id:(todos.length + 1) + (closed.length), task: item, close:(false)};
    open.push(newItem);
    return open;
}
function closeItem(itemId){
  closed.map(function(item){
    if(item.id == itemId){
      item.close = true;

      closed.push(item);
      return closed;
    }
  })
}
function getClosedItems(item){
  return closed;
}
function reactivateItem(itemId){
  const newClosed = closed.filter(function(item){
    return item.id = itemId
  })
  closed = newClosed;
  return closed;
}
function removeItem(itemId){
  return open.map(function(item){
    if(item.id == itemId){
      item.close = true
      console.log(item);
      closed.push(item)
      return item
    } else {
      return item
    }
  })
}

module.exports = {
  getOpenList: getOpenList,
  addItem: addItem,
  getClosedItems: getClosedItems,
  closeItem: closeItem,
  removeItem: removeItem,
  reactivateItem: reactivateItem
}
