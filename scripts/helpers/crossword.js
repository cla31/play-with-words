//11mn13 Les mots croisés.
//J'ai 4 lettres inconnues et je cherche un mot où il y a un a et un f:
//?a??f
//Affichez la liste des 19 mots possibles
//On va utiliser une expression régulière. On va filtrer les mots en selon de cette condition,
//Pour chaque mot, il faut que...
// / = condition
//^= il faut que ça commence par...
//.=un caractère
//ensuite
//a
//ensuite
//.=un caractère
//etc..
// $ et ça doit se terminer
// et ensuite on test pour voir si ça marche avec le mot actuel:
// .test(word)
//fonction exemple
function withUnknownLetters(wordsList) {
    return wordsList.filter(word => /^.a..f.$/.test(word))
}
//A retravailler selon les cas:
function withUnknownOthersLetters(wordsList) {
    return wordsList.filter(word => /^[cupeet][cupeet]v[cupeet][cupeet]$/.test(word))
}
//A customiser selon les cas pour le scrabble:
//Par exemple, pour chercher un mot qui contient au début une des lettres suivantes: tipodud
//Idem pour les troisième et quatrième position.
//Exemple:
// function withUnknownOthersLetters(wordsList) {
//     return wordsList.filter(word => /^[tipodud]e[tipodud][tipodud]$/.test(word))
// }
//renvoit peut ou tetu