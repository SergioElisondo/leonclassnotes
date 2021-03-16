// this function takes in a number and a word -- multiplies the length of the word by a nnumber and alerts the result of the conditional statement 

function takeNumberAndWord (num1, word1) {
    let num2 = Number(num1)
    let word2 = Number(word1.length)
    if (word2 * num2 > 100){
        alert("Winner")
    }else{
        alert("No Dice Amigo")
}
}
takeNumberAndWord(26, 'yuki')