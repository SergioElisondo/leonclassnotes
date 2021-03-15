// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

num1 = [1, 3, 5, 6]
function takeInArray(num1){    
    let firstNum = num1[0]    
    let secondNum = num1[num1.length - 1]
    let sumOfTwo = (firstNum + secondNum)
    console.log(sumOfTwo)
}
takeInArray(num1)