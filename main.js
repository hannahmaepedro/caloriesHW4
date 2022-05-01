calories = [];

//constructor
let someName = function(pName, pCalories){
    this.someName = parseInt(pName);
    this.someCalories = parseInt(pCalories);
}

calories.push(new cal ("banana", 20));
calories.push(new cal ("hot dog", 450));


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("submitCalories").addEventListener("click", function () {
        let xName = document.getElementById("foodName").value;
        let xCalories = document.getElementById("numberOfCalories").value;
        let totalCalories = new cal(xName, xCalories)
        calories.push(totalCalories);
        console.log(calories);
    });
});

