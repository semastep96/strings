// learnjs hw

// 1

function ucFirst(string) {
    if(!string) return "bad str"
    return string[0].toUpperCase() + string.slice(1)
}

console.log(ucFirst("sema"))

// 2

function checkSpam(string) {
    return string.toLowerCase().includes('viagra') || string.toLowerCase().includes('xxx')
}

console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit")) // false

// 3

function truncate(string, maxLength) {
    if (string.length <= maxLength) return string
    return string.slice(0, maxLength - 1) + '…'
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) // "Вот, что мне хотело…"

console.log(truncate("Всем привет!", 20)) // "Всем привет!"

// 4

function extractCurrencyValue(sum){
    return +sum.slice(1)
}
console.log(extractCurrencyValue('$120') === 120) // true