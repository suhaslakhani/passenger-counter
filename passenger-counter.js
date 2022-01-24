
let countEL = document.getElementById("counter-el")

let count = 0
function increment() {
    count = count + 1 
    countEL.innerText = count
}

function save() {
    console.log(count)
}


// let welcomeEl = document.getElementById("welcome-el")
// let Name = "suhas"
// let greeting = "welcome back "

//  welcomeEl.innerText = greeting + Name

// // console.log(welcomeEL)