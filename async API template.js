//async API template

async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}
getACuteDogPhoto()


// in terminal do ---> npm install figlet  <--- gives access to figlet


// async function getACutePhoto(){
//     const response = await fetch('https://...')
//     const data = await response.json()
//     console.log(datsa)
//     const backgroundChanger = data.dog.running
//     document.querySelector('h2').innerText = backgroundChanger
// }

// async function gettingThatPhoto(){
//     const URL = ('https')
//     const responses = await fetch(URL)
//     const data = await responses.json()
//     const theMainImage = data.outside
//     document.querySelector('h2').innerText = theMainImage
// }