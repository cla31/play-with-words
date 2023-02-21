//fonction exemple
export function withUnknownLetters(wordsList) {
    return wordsList.filter(word => /^.a..f.$/.test(word))
}
//A retravailler selon les cas:
export function withUnknownOthersLetters(wordsList) {
    return wordsList.filter(word => /^[cupeet][cupeet]v[cupeet][cupeet]$/.test(word))
}