let numbers = [10, 13, 15, 18, 24]

console.log(filterodds(numbers))


function filterodds(x) {

    let arr = [];

    for (let index = 0; index < x.length; index++) {
        if ((x[index] % 2) == 0) {

            arr.push(x[index])
        }

    }
    return arr
}