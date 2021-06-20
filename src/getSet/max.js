const max = function (...args) {
    let result = args[0]
    for (let i = 1; i < args.length; i++) {
        if (new Date(args[i]) > new Date(result)) {
            result = args[i]
        }
    }
    return result
}
export default max
