let weapons = ["Glock-17", "Uzi", "Kalshnikov"]

console.log(Changearray(weapons))

function Changearray(x) {
    let y = x.length - 1
    x[y] = "Virus"
    return x
}