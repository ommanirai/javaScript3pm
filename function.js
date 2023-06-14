// add()
// substract()
// greetingText
/*
function in javascript:
=> reusable block of code which perform specific task

syntax:
function function_name(){
    // body of function
}
*/
//  +, -, /, x
// add()
// declaration syntax
function add() {
    var a = 12;
    var b = 24;
    var sum;
    sum = a + b;
    console.log("the sum of two number is: ", sum)
}
// declaration syntax
function substract() {
    var num1 = 23;
    var num2 = 12;
    var diff;
    diff = num1 - num2;
    console.log(diff)
}
// function call
// add()
// substract()

// two way of writing a function in javascript
/*
1. expression syntax
var sum = function(){

}
2. declaration syntax
function sum(){

}
*/
// expression syntax function
// greetingText()
var greetingText = function () {
    console.log("Namaste")
}

// console.log(typeof (greetingText))
// greetingText()


// Hoisting => hoisting is a mechanism which moves all the declaration at top before execution