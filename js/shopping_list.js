function ShoppingList(items){

  this.items = items;


}




ShoppingList.prototype.addItem = function(item){


  this.items.push(item.name);

};

ShoppingList.prototype.removeItem = function(shoppingItem){


  if(this.items.indexOf(shoppingItem.name) >=0 ){

    this.items.splice(this.items.indexOf(shoppingItem),1);
  }
  else if(shoppingItem === undefined){

     this.items.pop();

  }
  else {

     return "Item does not exist";

  }

 
};

ShoppingList.prototype.render = function(){

  var line;
  var output ="<ul></ul>";

  
 this.items.forEach(function(name){

    line = "<li>" + name + "</li>" ;
    output.appendChild(line);

  });
  
    return output;

};