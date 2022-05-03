foodItemArray = [];

//constructor
let FoodItem = function(pName, pCalories){
    this.someName = pName;
    this.someCalories = parseInt(pCalories);
};

let newFood1 = new FoodItem("banana", 20)
foodItemArray.push(newFood1);

let newFood2 = new FoodItem("hot dog", 450 );
foodItemArray.push(newFood2);

console.log(foodItemArray)

   
    
function formSubmitEvent() {
    let total = 0;
    let xsomeName = document.getElementById("foodName").value;
    let xsomeCalories = document.getElementById("numberOfCalories").value;
    foodItemArray.push(new FoodItem(xsomeName, xsomeCalories))
   //clear text boxes
        document.getElementById("foodName").value = "";
        document.getElementById("numberOfCalories").value = "";

        for (i = 0; i < foodItemArray.length; i++) {
            total = total + foodItemArray[i].somecalories;
        }

    document.getElementById("totalCalories").value = total;
}
