const buttonEl = document.querySelector(".jokeBtn")
const jokeText = document.querySelector(".jokeText")
const image = document.querySelector("img")
const anyName = document.queryCommandValue("#name")

const anySurname = document.queryCommandValue("#surname")

buttonEl.addEventListener("click", () => {
    
    fetch("http://api.icndb.com/jokes/random") //method to bring data from server
    .then(response => response.json())
    .then(newName = anyName.value)
    .then(data => {
        const jokeBox = data.value.joke
        result = jokeBox.replace('Chuck Norris', newName); 
        console.log(newName)
        jokeText.innerText = result

    })
    .catch(error => console.log(error, "this is error"))

    image.classList.add("shake-img")
    setTimeout(() => {
        image.classList.remove("shake-img")
    }, 2000)
})

//homework is to change jokes, instead of chucj norris use names from inputs