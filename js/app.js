



var food;
var description;
var content;
var aList;
var itemList = new ShoppingList([]);
var newFood;

console.log("shopping");
function add_to_shopping_list(){

   food =  document.getElementById("foodName").value;
   description =  document.getElementById("foodDescript").value;

   newFood = new ShoppingListItem(food,description);


   
    itemList.addItem(newFood);
    aList = itemList.render();

    content = document.getElementById("content");
    content.appendChild(aList);


}










