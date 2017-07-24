/**
 * Created by Jacob on 2017-07-24.
 */

// console.log("HELLO WORLD")

// for loop
/*
for(var i = 0; i<15;i++){
    console.log(i)
    if(i > 10){
        console.log("WOW")
    }
*/

// while loop
i = 5
/*while(i<15){
    console.log("THE NUMBER IS " + i)
    i++;*/

//for each loop
// the for each loop is designed to loop trough arrays
var veggies = ["carrot", "potato", "tomato", "onion", "cucumber", "salad"];

veggies.forEach(function (veggie) {
    console.log(veggie);
});

// for loops with arrays
for(var e=0;e<veggies.length;e++){
    console.log("for"+veggies[e])
}


