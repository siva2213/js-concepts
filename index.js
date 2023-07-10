//Hoisting - two phases
//1.memory creation phase and 2.code execution phase

// getName()
// console.log(name1) // undefined(varibale created in global memory space)
// console.log(lastName) // err: not defined
// console.log(az) //err: referrence err: cannot acces az before initilazation
// let az; // let and const can't be hoisted because they are block scope.


// var name1 = 7

// var getName = function () {
//     console.log('invoked')
// }

//closures

//  function parent() {
//     let a = 1
//     function child() {
//         console.log(a)
//     }
//     child()
// }


/** */
//first class functions
// const foo = () => {
//   console.log("foobar");
// };
// foo(); // Invoke it using the variable
// // foobar
// function sayHello() {
//   return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");


//curying functions
// e.g: sum(1)(2)...()
// let sum = (a) => {
//   return (b) => {
//     return b ? sum(a + b) : a
//   }
// }

// console.log(sum(1)(2)(3)(4)())
// // e.g2
// let mutiply = function(x, y) {
//   console.log(x*y, 'mul')
// }

// let multiplyBy2 = mutiply.bind(this, 2)
// multiplyBy2(3)


// Event Bubbling and event Capturing
// Bubbling, event flow travels from bottom to top when comes to
// capturing event flow travels from top to bottom
// let el = document.getElementById

//Event delegation
//e.g
// 1.attaching event handler in list of items huge load on DOM,
// instead adding one event handlers on top of the list
//2. Let's add a data attribute
// document.getElementById('list').addEventListener('click', (e) => {
//   console.log(e, 'clicked')
// if(e.target.id === 'item1') { here we are delegating the specific clicked item
//   console.log('clicked 1')
// }
// });


// call, apply, bind
// call
// let empName = {
//   first: 'siva',
//   last: "chettebhaktula",
//   printFullName: function (place, mobile) {
//     console.log(`${this.first} ${this.last} ${place} ${mobile}`, 'emp name')
//   }
// } 

// function printName (place, mobile) {
//   console.log(`${this.first} ${this.last} ${place} ${mobile}`, 'emp name')
// }

// printName.call(empName, "Hyd", 1111111)

// // apply

// printName.apply(empName, ["Hyd", 1111111])

// // bind

// let boundedPrintName = printName.bind(empName, "Hyd", 1111111)

// boundedPrintName()

// // Map, Filter, Reduce

// const arr = [
//   {
//     firstName: 'siva',
//     lastName: 'Ch',
//     age: 32
//   },
//   {
//     firstName: 'Sri',
//     lastName: 'Ch',
//     age: 29
//   },
//   {
//     firstName: 'Taru',
//     lastName: 'S',
//     age: 31
//   },
// ]
// // map and first and last names
// const mapArr = arr.map(obj => obj.firstName + obj.lastName)
// console.log(mapArr, 'mapResult')
// // Polyfill
// Array.prototype.myMap = function(cb) {
//   var arr = [];              
//   for (var i = 0; i < this.length; i++) { 
//      /* call the callback function for every value of this array and       push the returned value into our resulting array
//      */
//     arr.push(cb(this[i], i, this));
//   }
//   return arr;
// }
// function sumBy2(val) {
//   return val + 2
// }
// console.log([1,2,3,4].myMap(sumBy2), 'myMap')


// // filter below age 30
// const filArr = arr.filter(obj => obj.age <= 30)
// console.log(filArr, 'filArr')
// //polyfill
// Array.prototype.myFilter = function(cb) {
//   const arr = []
//   for (let index = 0; index < this.length; index++) {
//     if(cb(this[index], index, this)) {
//       arr.push(this[index])
//     }
//   }
//   return arr
// }
// function even(val) {
//   return val % 2 === 0
// }
// console.log([1,2,3,4].myFilter(even), 'filArr')

// // reduce, return firstname of below 30
// const resArr = arr.filter(obj => obj.age <= 30).map(obj => obj.firstName + obj.lastName)
// console.log(resArr, 'resArr')
// // reduce, use direct reduce method instead of filter and Map as above example
// const redArr = arr.reduce((acc, cur) => {
//   const res = acc
//   if(cur.age <= 50) {
//     res.push(cur.firstName + cur.lastName)
//   }
//   return res
// }, [])

// console.log(redArr, 'redArr')

// // polyfill for reduce

// Array.prototype.newReduce = function(cb, init) {
//   let acc = init
//   for (let i = 0; i < this.length; i++) {
//     if(acc !== undefined) {
//       acc = cb.call(undefined, acc, this[i], i, this)
//     } else {
//       acc = this[i]
//     }
//   }
//   return acc
// }

// console.log([1,2,3].newReduce((acc, cur) => {
//   return acc + cur
// }), 'newReduce')


// //this keyword
// // this refers to window obj or global obj
// // console.log(this === window, 'this bool') //true
// var a = 10
// console.log(a, 'a')
// console.log(window.a, 'a')
// console.log(this.a, 'a')

// function b() {
//   console.log(this.a, 'this')
//   var x = 10
//   console.log(this.x, 'this1')
// }
// b()
// // console.log(x, 'x') //err
// const c = () => {
//   console.log(this.a, 'arror this');
// }
// c()

// let obj = {
//   name: 'siva',
//   lastName: 'ch',
//   fullName() {
//     console.log(this.name + ' ' + this.lastName, 'full name')
//   }
// }
// obj.fullName()


// let onclick =  document.getElementById('onclick')
// //debounce
// function debounce(fn, delay) {
//   // let timer;
//   return function() {
//     // clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn()
//     }, delay)
//   }
// }
// //throttle
// const throttle = function(fn, delay) {
//   let last = 0
//   let id = 0
//   return (...args) => {
//     id++
//     let now = new Date().getTime()
//     if(now - last < delay) return
//     last = now
//     console.log(id)
//     fn(...args)
//   }
// }
// debounce(() => {
//   console.log('clicked')
// }, 5000)()
// debounce(() => {
//   console.log('clicked')
// }, 5000)()
// debounce(() => {
//   console.log('clicked')
// }, 5000)()
// debounce(() => {
//   console.log('clicked')
// }, 5000)()
// onclick.addEventListener('click', throttle(() => {
//   console.log('clicked')
// }, 1000))



// function a(cb) {
//   let x = 10;
//   return function() {
//     setTimeout(() => {
//       cb()
//       console.log(x, 'testtt')
//     }, 300)
//   }
// }
// console.log(a(() => {
//   console.log('cb called')
// }))

// const timer = setTimeout(() => {
//   console.log('timer1')
// }, 3000)
// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 4000)
// console.log(timer, 'logged time')
// clearTimeout(timer2)
// console.log(timer2, 'logged time1')


// //push and pop
// let psArr = [1,2,3]
// psArr.push(4)
// console.log(psArr, 'psArr')
// let ppArr = psArr.pop()
// console.log(ppArr, 'ppArr')


// // shallow clone and deep clone ways
// var student1 ={
//   name : "Manish",
//   lastname : "Gfg",
//   company: {
//     salary: '10k',
//     designation: 'software engineer'
//   },
// }
// var student2 = JSON.parse(JSON.stringify(student1))
// var student2 = Object.assign({}, student1)
// var student2 = { ...student1}
// var student2 = structuredClone(student1)
// student1.company.salary = "20k"
// console.log("student 1 name is",student1.company.salary)
// console.log("student 2 name is ",student2.company.salary);

// problem solving
// 1.
// function findMissingNumbers(arr) {
//   // Create sparse array with a 1 at each index equal to a value in the input.
//   var sparse = arr.reduce((acc, cur) => {
//     acc[cur]=1
//     return acc
//   }, []);
//   console.log(sparse, 'sparse')
//   console.log([...sparse], 'sparse keys')
//   // Create array 0..highest number, and retain only those values for which
//   // the sparse array has nothing at that index (and eliminate the 0 value).
//   return [...sparse.keys()].filter(i => i && !sparse[i]);
// }

// var someArr = [2, 5, 3, 1, 4, 7, 15, 10]
// var result = findMissingNumbers(someArr);
// console.log(result);

// // 2.
// function validatePalin(str) {  
  
//   // get the total length of the words  
//   const len = string.length;  

//   // Use for loop to divide the words into 2 half  
//   for (let i = 0; i < len / 2; i++) {  

//       // validate the first and last characters are same  
//       if (string[i] !== string[len - 1 - i]) {  
//           alert( 'It is not a palindrome');  
//       }  
//   }  
//   alert( 'It is a palindrome');  
// }  

// // accept the string or number from the prompt  
// const string = prompt('Enter a string or number: ');  

// const value = validatePalin(string);  

// console.log(value);

// setInterval(() => {

// })

// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(777), 2000)
// });
// console.log(promiseA.then(res => console.log(res)), 'promiseA')

// 3.
// const str = "a100bc200d300e450"
// const numbers = []
// function calSum(input) {
//   let tempArr = []
//   let isprevNumber;
//   for(let i = 0; i <= input.length; i++) {
//     let num;
//     if(Number(input[i]) || Number(input[i]) === 0) {
//       num = input[i]
//     }
//     if (isprevNumber && typeof Number(num) === 'number' && Number(input[i]) || Number(input[i]) === 0) {
//       isprevNumber = isprevNumber + num
//     } 
//     else if(typeof Number(num) === 'number' && Number(input[i])) {
//       isprevNumber = num
//     } 
//     else {
//       if(isprevNumber || (input.length - 1 === i)) {
//         tempArr.push(isprevNumber)
//         isprevNumber = ''
//       }
//     }
//   }
//   console.log(tempArr, 'tempArr')
//   let resArr = tempArr.reduce((acc, cur) => {
//     acc = +cur + +acc
//     return acc
//   })
//   return resArr
// }

// console.log(calSum(str.split('')));


// // MADAM
// let str = 'MADAM'
// let strArr = str.split('')

// let newString = strArr.reverse().join('')

// if(str === newString) {
//   console.log('palindrome')
// } else {
//   console.log('not a palindrome')
// }











