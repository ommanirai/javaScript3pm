/*
application data
var
const 
function

scope:
-> scope is accessibility of application data

types of scope
1. global scope
-> accessible within the file
-> declare in outermost layer(outside the function)

2. functional scope/local scope
-> var mentain functional scope
-> accessible within the function
-> declare within the function

3. block scope
-> declare within the block
-> accessible within the block
-> let maintain block scope

*/

//  global scope 
var name = 'ram'
const pi = 3.14
var status = 'online'
function welcome() {
    console.log("welcome")
    console.log(name + pi)
}

// welcome()

// functional scope
function hi(msg) {
    status = 'active'
    console.log("hi", name)
    console.log(msg)
    console.log(status)
}

hi("welcome")
console.log(status)


// block scope
var greetingText = 'good morning'
// var text = 'hi'
if (greetingText) { // condition: truthy value
    let text = "hi " + greetingText
    console.log(text)
}
else {
    let text = greetingText + 'namaste'
    console.log(text)
}

// console.log(text)
