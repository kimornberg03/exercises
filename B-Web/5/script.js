var counter = 0

function count() {
    counter = counter + 1
    document.getElementById("num").innerHTML = counter
}

var button = document.createElement("button")
button.innerHTML = "Click me"

var body = document.getElementsByTagName("body")[0]
body.appendChild(button)

button.addEventListener("click", function() { count() })