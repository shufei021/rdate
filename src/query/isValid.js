const isValid = function (d) {
    return new Date(d).toString() !== 'Invalid Date'
}
export default isValid
