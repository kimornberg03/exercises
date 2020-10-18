let names = ["Maja", "Alicia", "Hampus", "Albin"]

Noname(names)

function Noname(x) {

    let output

    for (let index = 0; index < x.length; index++) {
        output = "hej " + x[index];
        console.log(output)
    }
}