export function twelveLetters(wordsList) {
    return wordsList.filter(word => /^(...)(...)\2\1$/.test(word))

}