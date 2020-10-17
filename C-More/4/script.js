let firstperson = { Name: "Kim", LastName: "Örnberg", Age: "16", Email: "Kim.ornberg@gmail.com" }
let secondperson = { Name: "Karl", Lastname: "svensson", Age: "16", Email: "Karl.Svenson@gmail.com" }

console.log(isSameUser(firstperson, secondperson))

function isSameUser(x, y) {

    if (x.Email == y.Email) {
        return true
    } else {
        return false
    }
}