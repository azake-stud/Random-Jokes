const buttonEl = document.querySelector(".jokeBtn")
const jokeText = document.querySelector(".jokeText")
const image = document.querySelector("img")


buttonEl.addEventListener("click", () => {
    fetch("http://api.icndb.com/jokes/random") //method to bring data from server
    .then(response => response.json())
    .then(data => {
        jokeText.innerHTML = data.value.joke
    })
    .catch(error => console.log(error, "this is error"))

    image.classList.add("shake-img")
    setTimeout(() => {
        image.classList.remove("shake-img")
    }, 2000)
})

//homework is to change jokes, instead of chucj norris use names from inputs