
let countEL = document.getElementById("counter-el")

let count = 0
function increment() {
    count = count + 1 
    countEL.innerText = count
}
let saveEl = document.getElementById("save-el")
let previousEnteries = count + "-"
function save() {
    saveEl.innerText = previousEnteries
    console.log(count)
}


// let welcomeEl = document.getElementById("welcome-el")
// let Name = "suhas"
// let greeting = "welcome back "

//  welcomeEl.innerText = greeting + Name

// // console.log(welcomeEL)