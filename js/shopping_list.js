function ShoppingList(items){

  this.items = items;


}




ShoppingList.prototype.addItem = function(item){


  this.items.push(item);

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

 
  var output = document.createElement("ul");
  var line = document.createElement("li");
  


    line.appendChild(document.createTextNode(this.items[this.items.length-1].name + " : " + this.items[this.items.length-1].description + " "));
    output.appendChild(line);

 
  
    return output;


};