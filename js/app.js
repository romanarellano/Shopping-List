var List = new ShoppingList();




function add_to_shopping_list() {
  var newItem = new ShoppingListItem(
    document.getElementById("title").value,
    document.getElementById("description").value
    );

  document.forms[0].title.value = '';
  document.forms[0].description.value = '';
  

  List.addItem(newItem);
  document.getElementById('content').innerHTML = List.render();
}

function checkChange(idx) {
 
  if (myList.items[idx].is_done) {
    myList.items[idx].uncheck();
  }
  else {
    myList.items[idx].check();
  }
}


function removeItem(idx) {
  

  myList.removeItem(myList.items[idx]);

  document.getElementById('content').innerHTML = myList.render();

}