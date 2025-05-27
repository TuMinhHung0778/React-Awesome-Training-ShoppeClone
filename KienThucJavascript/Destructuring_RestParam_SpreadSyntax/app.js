/**
 * Destructuring
 */

const { use } = require("react");

// Destructuring với object 

// let users = {
//     name: 'hung',
//     age: 23,
//     sex: 'male',
// }

// console.log(users);

// const name = user.name
// const age = user.age
// const sex = user.sex

// const { age: userAge, name, sex } = user

// console.log(name, userAge, sex);

// // Destructuring với array 

// const list = [
//     1, // value
//     function (a, b) { // sum
//         return a + b
//     }
// ]

// const [value, sum] = list

// console.log(value);
// console.log(sum(2, 3));


/**
 * Spread Syntax
 */

// const user = {
//     name: 'hungit-coder',
//     age: 24,
//     ability: ['coding']
// }
// // const cloneUser = user // cùng tham chiếu - cùng vùng nhớ

// // shallow copy (copy nông)
// const cloneUser = { ...user } // bản sao mới - vùng nhớ khác

// console.log(cloneUser === user);
// console.log(cloneUser.ability === user.ability);

/**
 * Rest Parameter
 */

// const handle = (a, b, ...c) => {
//     return c
// }

// const value = handle(1, 2, 3, 4, 5, 6)

// console.log(value);

const handle = ({ a, b, ...c }) => {
    return c
}

const value = handle({ a: 1, b: 2, c: 3, d: 4, e: 5 })

console.log(value);
