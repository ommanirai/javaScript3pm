var details = [
    {
        name: 'anubodh',
        address: 'Lalitpur',
        email: 'anubodh@gmail.com',
        class: 5
    },
    {
        name: 'jenisha',
        address: 'bkt',
        email: 'jenisha@gmail.com',
        class: 5
    },
    {
        name: 'aarati',
        address: 'ktm',
        email: 'aarati@gmail.com',
        class: 6
    },
    {
        name: 'goma',
        address: 'Lalitpur',
        email: 'goma@gmail.com',
        class: 7
    },
    {
        name: 'sita',
        address: 'Lalitpur',
        email: 'sita@gmail.com',
        class: 5
    },
    {
        name: 'gita',
        address: 'Lalitpur',
        email: 'gita@gmail.com',
        class: 5
    },
    {
        name: 'ram',
        address: 'Lalitpur',
        email: 'ram@gmail.com',
        class: 9
    },
    {
        name: 'ramaa',
        address: 'pkr',
        email: 'ramaa@gmail.com',
        class: 8
    },
    {
        name: 'ramadan',
        address: 'ktm',
        email: 'ramadan@gmail.com',
        class: 12
    },
    {
        name: 'ramila',
        address: 'bkt',
        email: 'ramila@gmail.com',
        class: 51
    },
    {
        name: 'ram',
        address: 'Lalitpur',
        email: 'ram@gmail.com',
        class: 12
    }
]
// js centric loop
// forEach
// filter
// map
// find
// some
// every
// reduce
var ram_name = details.filter(function (item, index) {
    // console.log(item)
    // console.log(index)
    if (item.name == 'ram' && item.address == 'Lalitpur') {
        return item;
    }
})
// console.log(ram_name)


// map
var emailDetails = details.map(function (item, index) {
    return item.email;
})
// console.log(emailDetails)


// find
var ram = details.find(function (item, index) {
    if (item.name == 'ram') {
        return item;
    }
})
// console.log(ram)

details.forEach(function(item, index){
    item.status = "online"
})
// console.log(details)

// some
var result = details.some(function(item, index){
    if(item.name == 'ram'){
        return true;
    }
})
// console.log(result)

// every
var res = details.every(function(item, index){
    if(item.name == 'ram'){
        return true;
    }
})
// console.log(res)
var num = [1,2,3,4,5,6,7,8,9,10] // 55
// reduce
var sum = 0
var acc = 0
var result = num.reduce(function(acc, item, index, source){
    // console.log(acc)
    // console.log(item)
    // console.log(index)
    // console.log(source)

    // sum the array
    // sum = sum + item
    // return sum

    acc = acc + item
    return acc
},0 )

console.log(result)
