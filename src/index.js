module.exports = function toReadable(number) {
    const simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenths = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return simpleNumbers[number]
    } else if (number < 100 && number % 10 == 0) {
        return tenths[number * 0.1]
    } else if (number < 100 && number % 10 != 0) {
        return tenths[Math.floor(number * 0.1)] + ' ' + simpleNumbers[number % 10]
    } else if (number < 1000 && number % 100 == 0) {
        return simpleNumbers[number * 0.01] + ' hundred'
    } else if (number < 1000 && number % 100 != 0 && number % 10 == 0) {
        return simpleNumbers[Math.floor(number * 0.01)] + ' hundred ' + tenths[(number * 0.1) % 10]
    } else if (number < 1000 && number % 10 != 0 && number % 100 < 20) {
        return simpleNumbers[Math.floor(number * 0.01)] + ' hundred ' + simpleNumbers[number % 100]
    } else {
        return simpleNumbers[Math.floor(number * 0.01)] + ' hundred ' + tenths[(Math.floor(number * 0.1)) % 10] + ' ' + simpleNumbers[number % 10]
    }
}