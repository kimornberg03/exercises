let person = (makePerson("ulf", "Örnberg"))

console.log(person)

function makePerson(strfirstname, strlastname) {

    let x = { firstName: strfirstname, lastname: strlastname, Ishuman: true }
    return x
}