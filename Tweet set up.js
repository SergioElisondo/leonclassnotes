let tweet = prompt("Compose Your Tweet: ")
alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining")

let tweet = prompt("Compose Your Tweet: ")
let tweetUnder140 = tweet.slice(0,140)
alert(tweetUnder140)
alert(tweet.length)



//practicing functions

/*function min(a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}*/
