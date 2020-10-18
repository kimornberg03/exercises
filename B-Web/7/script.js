let passwordCorrect = true
let inputPassword
let correctPassword = "hello"

while (passwordCorrect) {
    inputPassword = prompt("Lösenord?")
    if (inputPassword === correctPassword) {
        alert("Rätt")
        passwordCorrect = false
    } else {
        alert("Försök igen")

    }
}