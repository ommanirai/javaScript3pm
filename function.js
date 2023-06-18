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


/*
types of function:
1. named function
2. function with argument
3. function with return type
4. anynamous function(unnamed function)
5. IIFE(immidiately invoked functional expression)

1. named function
syntax: 
function function_name(){

}

2. function with argument

function function_name(parameter1, parameter2){
    // block of function
}

function_name(argument1, argument2)


3. function with return type

syntax:

function function_name(a, b){
    // body of function
    sum = a + b
    return sum
}

4. anynamous function(unnamed function)

syntax:

function(){

}

5. IIFE(immidiately invoked functional expression)

syntax:
(function)()

*/
var detailss = {
    name: 'ram',
    phone: 9818642612,
    address: 'vedu',
    gender: 'male',
    email: 'ommanirai27@gmail.com'
}
var name = 'ram'
// function(name, address, phone, email, gender){
function welcome(details) {
    // console.log("what comes in details: ", details)
    console.log('hi ' + details.name + ' welcome to ' + details.address + ' phone: ' + details.phone + ' email: ' + details.email + ' gender: ' + details.gender)
}
// welcome('ram', 'vedu', 9818642612, 'male', 'ommanirai27@gmail.com')
// welcome("shyam", 'kumaripati')
welcome(detailss)


function hi(name, address) {
    console.log("hi " + name + " welcome to " + address)
}
hi('ram', 'vedu')

// sum(2,3)

// var x = 13;
// var y = 23;
// z = x

function sum(a, b) {
    // console.log("what comes in: ", a, b)
    var sum = a + b
    console.log("sum of number", sum)

    // sum = 
    // sum of number = 
    // the sum of two numebr is = 
}

// sum(1,2);
// sum(12, 12);
// sum(23, 45)


// function with return type

function calculator(a, b) {
    var sum = a + b;
    var diff = a - b;
    var fruits = ['apple', 'kiwi', 'mango', 'orange']
    var shopping_list = {
        phone: 'iphone',
        laptop: 'laptop'
    }
    return {
        // ecma script 5
        // es6
        // object shorthand property
        sum,
        diff: diff,
        name: 'ram',
        address: 'vedu',
        list: shopping_list,
        fruits: fruits
    }
    // return sum
    // console.log('hi')
}

var result = calculator(2, 3)
console.log("what comes in ", result.fruits[3])
// console.log("what comes in ", result.list.phone)
// var res = add(12, 13)
// var results = add(22, 31)
// console.log('sum of two number is: ',result)
// console.log('sum : ',res)
// console.log('sum of number: ',results)


// IIFE Example
function hi(){
    console.log("hi from IIFE")
}
// (hi)()

(function(){
    console.log("i am IIFE")
    console.log("i am taking help of IIFE to get executed")
})()