var fruits = ['mango', 'mango', 'apple', 'kiwi', 'kiwi', 'papaya', 'papaya', 'banana']
var bikes = ['honda', 'pulsar', 'honda', 'yahama', 'pulsar']

function uniqueArray(arr) {
    var fru = []
    arr.forEach(function (item, index) {
        // console.log("item is: " +item)
        // console.log("index is: "+index)
        
        // first logic
        // if (fru.indexOf(item) == -1) {
        //     fru.push(item)
        // }

        // second logic
        // if (fru.includes(item)) {

        // }
        // else {
        //     fru.push(item)
        // }

        // third logic
        if (!fru.includes(item)) {
            fru.push(item)
        }
    })
    return fru;
}
var result = uniqueArray(fruits)
console.log(result)

// console.log(fru)

// loops
/*
for
while
do-while


// js centric loop
forEach
map
filter
reduce
some
every
find

*/



// slice
// console.log(fruits.slice(1, 4))



// splice
// syntax

// array.splice(start index, no of items to remove, list of item to add)

// fruits.splice(1, 0, 'abc', 'def', 'ghi')



// add item in array

// at first
// fruits.unshift("orange")
// at last
// fruits.push("orange")

// remove item from array
// at first
// fruits.shift()

// at last
// fruits.pop()


// console.log(fruits)




// console.log(typeof(fruits))

// console.log(fruits[4])
// console.log(fruits.length)
// console.log(fruits.indexOf("papaya"))
// console.log(fruits.lastIndexOf("mango"))