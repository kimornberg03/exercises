let button = document.getElementById("Textbutton")
let text = document.getElementById("Textinput")

button.addEventListener("click", out)

function out() {
    let x = text.value
    alert(x)
}