/**
 * Created by Jacob on 2017-07-24.
 */


// todo: OBJECT LITERAL

/*
var person = {
    name: "Jacob",
    lastname: "Stachowicz",
    gender: "male",
    friends: ["Albert", "Viktor", "Sebbe"],
    //embeded objects
    address: {
        street: "jacobgatan 88",
        city: "Stockholm"
    },
    //include funtions
    wholeName: function () {
        return this.name + " " + this.lastname;
        
    }
}


console.log(person.wholeName(), "lives in", person.address.city);*/


// todo: OBJECT CONSTRUCTOR

var lemon = new Object();
/*lemon.color = "yellow"
lemon.shape = "round"

lemon.describe = function () {
    return "a lemon has the color"+this.color+"and the shape is"+this.shape

}

console.log(lemon.describe())*/


// todo: Constructor Pattern
function Veggie(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    lemon.describe = function () {
        return "a"+this.name+" has the color"+this.color+"and the shape is"+this.shape;
    
}

var tomato = new Veggie("tomato", "red", "round");
var onion = new Veggie("onion", "white", "round");

console.log(tomato.describe);



