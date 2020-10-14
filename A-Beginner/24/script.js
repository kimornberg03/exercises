let str = "HEj"

console.log(isAllCaps(str))


function isAllCaps(upper) {

    if (upper == upper.toUpperCase()) {
        return true
    } else {
        return false
    }
}