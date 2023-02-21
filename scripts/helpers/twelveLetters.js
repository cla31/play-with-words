//19mn46
// Trouver le seul mot de 12 lettres qui s'écrit sous la forme de 3 lettres
// (groupe A) suivi encore de 3 lettres (groupe B) puis à nouveau le groupe B
// et le groupe A



function twelveLetters(wordsList) {
    return wordsList.filter(word => /^(...)(...)\2\1$/.test(word))

}
//On veut un mot qui commence par 3 lettres (...) -> groupe A
//Suivi par 3 autres lettres (...) -> groupe B
//comme je veux à nouveau que se soit le groupe B, qui correspond
//au groupe 2, je mets \2
//et à la fin je veux le groupe A
// donc je mets \1
//puis je test si ça marche pour le mot courant.