let object = { Name: "Kim", Lastname: "Örnberg", Age: "17" }

console.log(Fullname(object))

function Fullname(x) {

    let y = x.Name + " " + x.Lastname

    return y

}