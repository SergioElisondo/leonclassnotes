let palindrome = 'racecar'
let palindromeChecker = (str => str === str.split("").reverse().join(""))
//let palindromeChecker = str => str === str.split("").reverse().join("")  -- works without parenthesis
console.log(palindromeChecker(palindrome))