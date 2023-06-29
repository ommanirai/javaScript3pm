function add(n1, n2) {
    // n1 = 23;
    // n2 = 24;
    mul = n1 * n2;
    console.log(mul)
}
// add(100, '100')

// data type conversion(coercion)
/*
1. implicit coercion(js aaphai le convert garne)
2. explicit coercion(programmer aaphai le convert garne)
*/


// setInterval()
// setTimeout()
// typeof()

// number
// isNaN
// Number

// clearInterval()
// parseFloat()
var number = 100
var n = Number('100')
var n1 = 100.923394324
// console.log(typeof(parseFloat(number)))
console.log(number.toFixed(4))
// console.log(parseInt(n1))


// console.log(isNaN(n))
// console.log(n + n1)


// string
var name = 'Shyam is'
// console.log(name.substring(0, 4))
// console.log(name.substr(0,5))

// console.log(name)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// name.trim()
// console.log(name.trim().length)
// name.trim()
// console.log(name)


// object
// hasOwnProperty
// Object.keys
// Object.values
// JSON.stringify
// JSON.parse

var details = {
    name: 'ram',
    add: 'vedu',
    phone: 2304234234,
    status: 'online'
}
// console.log(typeof(details))

var detail = JSON.stringify(details)
// console.log(typeof(detail))
var det = JSON.parse(detail)
// console.log(typeof(det))
// console.log(det)
// console.log(detail)



// console.log(details.hasOwnProperty('name'))
// console.log(Object.keys(details))
// console.log(Object.values(details))

// includes
var email = 'ram@gmail.com'

// console.log(email.includes("@.com"))
// console.log(email.includes(".com"))
var number = 1
var num = setInterval(function(){
    number++
    if(number == 10){
        clearInterval(num)
    }
    console.log(number)
}, 500)