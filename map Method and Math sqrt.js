//Create a function that takes in an array of numbers
let arr = [3,4,5,2,3]
//Return a new array of numbers that is every original number squared  YOU NEED A MAP!!! and Math.sqrt 
// let newArr = arr.map(num => num**2)
let newArr = arr.map(num => Math.sqrt(num))
console.log(newArr)