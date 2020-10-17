let firstperson = { Name: "Kim", LastName: "Örnberg", Age: "16" }
let secondperson = { Name: "Karl", Lastname: "svensson", Age: "16" }

console.log(isSameAge(firstperson, secondperson))

function isSameAge(x, y) {

    if (x.Age == y.Age) {
        return true
    } else {
        return false
    }
}