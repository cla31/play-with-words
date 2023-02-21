export function doubleWords(wordsList) {
    return wordsList.filter(word => word.length >= 8 && /^(.*)\1$/.test(word))
}