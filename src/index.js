module.exports = function toReadable(number) {

    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const second = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) return first[number];

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) return second[number / 10];
        else return `${second[Math.floor(number / 10)]} ${first[number % 10]}`;
    }

    if (number >= 100  && number < 1000) {
        if (number % 100 === 0) return `${first[number / 100]} hundred`;
        else if (number % 10 === 0) return `${first[Math.floor(number / 100)]} hundred ${second[(Math.floor(number / 10)) % 10]}`;
        else if (number % 100 < 20) return `${first[Math.floor(number / 100)]} hundred ${first[number % 100]}`;
        else return `${first[Math.floor(number / 100)]} hundred ${second[Math.floor(number / 10) % 10]} ${first[number % 10]}`;
    }
}