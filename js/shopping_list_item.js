
  

function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function() {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(idx) {
  
  
  var name = '<span class="name">' + this.name + '</span>';

  var description = '<span class="description">' + this.description + "</span>";

  var deletion = '<span class="delete" onclick="removeItem(' + idx + ')"><a class="x" href="">x</a>' + "</span>";

  var checkbox = '<input type="checkbox" onchange="checkChange(' + idx + ')" class="checkbox">';

  
return '<li>' + deletion + checkbox +  name + " " + description + " " + '</li>' ;


};


  


