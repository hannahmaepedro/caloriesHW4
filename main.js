document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("submitCalories").addEventListener("click", function () {
            (document.getElementById("foodName").value,
            document.getElementById("numberOfCalories").value);
        console.log(FoodItemArray)
        
    });

    // document.getElementById("totalCalories").addEventListener("click", function() {
    //     console.log(FoodItemArray);
    //     // for (i = 0; i < someName.length; i++) {
    //     //     if (document.getElementById("foodName").value == FoodItemArray[i].someName){
                
    //     //     }
    //     // }
    // })
});

FoodItemArray = [];

//constructor
let someName = function(pName, pCalories){
    this.someName = parseInt(pName);
    this.someCalories = parseInt(pCalories);
    this.calculateCal = function () {
        for (let i in someCalories)
        totalCalories += someCalories [i]
    }

    let newSomeName1 = {
        someName: "banana",
        someCalories: 20,
    }

    let newSomeName2 = new someName2("hot dog", 450 );

    FoodItemArray.push(newSomeName1);
    FoodItemArray.push(newSomeName2);
    console.log(someName)

    document.getElementById("foodName").value = "",
    document.getElementById("numberOfCalories").value = ""
}

// function submitCalories() {
    // let newSomeName1 = {
    //     someName: "banana",
    //     someCalories: 20,
    // }

    // let newSomeName2 = new someName("hot dog", 450 );

    // FoodItemArray.push(newSomeName1);
    // FoodItemArray.push(newSomeName2);
    // console.log(FoodItemArray)

    // document.getElementById("foodName").value = "",
    // document.getElementById("numberOfCalories").value = ""
// }

// function totalCalories() {
    
// }
