let ob1 = { Name: "Kim", Lastname: "Örnberg", Age: "17" }
let ob2 = { Name: "Ulf", Lastname: "Örnberg", Age: "56" }
let persArray = []

persArray.push(ob1)
persArray.push(ob2)


console.log(Fullname(persArray))

function Fullname(x) {

    let retarray = [];

    for (let index = 0; index < x.length; index++) {
        retarray.push(x[index].Name + " " + x[index].Lastname)

    }
    return retarray
}