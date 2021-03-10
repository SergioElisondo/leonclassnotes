//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//PRACTICE BELOW

document.querySelector('button').addEventListener('click', fetchURL)

function fetchURL(){
  const choice = document.querySelector('input').value
  const url = 'https://www.cats.com/api'+choice
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}


//PRACTICE NUMBER 2
function getUrl (){
  const userChoice = document.querySelector('input').value
  const urlTwo = 'https://gatos.com/api'+userChoice

  fetch(urlTwo){
    .then(responseFromSite => responseFromSite.json())
    .then(dataFromSite => {
      console.log(dataFromSite)
    })
    .catch(errorz => {
      console.log(`error ${errorz}`)
    })
  }
}

//practice number 3
function getURL (){
  const userInput = document.querySelector("input").value
  const comboURL = 'https://yuki.com/api'+userInput

  fetch(comboURL){
    .then(response => response.json())
    .then(dataFromSite => {
      console.log(dataFromSite)
    })
    .catch(error => {
      console.log(`error ${error}`)
    })
  }
}