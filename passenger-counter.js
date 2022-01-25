
let countEL = document.getElementById("counter-el")

let count = 0
function increment() {
    count = count + 1
    countEL.textContent = count
}
let saveEl = document.getElementById("save-el")

function save() {
    let previousEnteries = count + " - "
    saveEl.textContent += previousEnteries
    countEL.textContent = 0
    count = 0

}