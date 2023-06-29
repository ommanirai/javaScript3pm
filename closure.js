/*
closure
closure is an inner function which has access to 
1. global scope
2. parent function scope
3. parent function argument
4. own scope and argument

*/
var status = 'active'
function welcome(name) {
    var greetingText = 'hi'
    function hi(msg) {
        // hi is a closure
        var text = greetingText + ' ' + name + ' ' + msg + ' ' + status
        // console.log(text)
        return text;
    }
    return hi
    // hi("hello")
}
// hi('hi')
var result = welcome('ram')("hi")
console.log(result)
// console.log("result is",result("hi"))
// welcome('shyam')

var res = welcome("shyam")("hello")
console.log(res)
// console.log("res is", res("hello"))


// multiply
// var multiply = mul(7)(6)
// // mul(5,6)
// console.log(multiply)
// result: 42
var detail1 = {
    name: 'ram',
    address: 'shyam',
    phone: 1234234
}


function number1(n1) {
    function number2(n2) {
        var mul = n1 * n2
        return mul;
    }
    return number2
}
var multiply = number1(7)(6)
console.log(multiply)
