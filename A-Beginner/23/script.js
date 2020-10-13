console.log(isDivisibleByFive2(25))



function isDivisibleByFive1(number) {


    if ((number % 5) == 0) {
        return true
    } else {
        return false
    }
}

function isDivisibleByFive2(number) {
    let x = number / 5
    let y = Math.floor(x)

    let z = x - y


    if (z == 0) {
        return true
    } else {
        return false
    }
}