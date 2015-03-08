function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function (item) {
  if ((item instanceof ShoppingListItem) === false) {
    console.log('error');
    return false;
  }

  this.items.push(item);
};

ShoppingList.prototype.removeItem = function (item) {
  if (item instanceof ShoppingListItem) {
    var idx = this.items.indexOf(item);

     
      this.items.splice(idx, 1);
      return true;
  
  }

  if (item === undefined) {
    // handles last item for no parameters
    this.items.pop();
    return true;
  }

};

ShoppingList.prototype.render = function() {
  return "<ul>" + this.items.reduce( function(prev, curr, idx) {
    return prev + curr.render(idx);
  }, "" ) + "<ul>";

};
