// https://www.youtube.com/watch?v=RfPR9978bFg
// 5mn32
// Trouvez tous les mots qui contiennent un Q mais pas de U

function qButNotU(wordsList) {
    return wordsList.filter(word => word.includes('q') && !word.includes('u'))

}
//Pour chacun des mots de la liste on regarde si la lettre q est inclue dans le mot.
//Et, si la lettre u n'est pas inclue dans le mot.
//word.includes('q')= vrai ou faux?
//!word.includes('u')= vrai ou faux?

//Une autre façon de faire avec les expressions régulières 6mn42
function qButNotUregex(wordsList) {
    wordsList.filter(word => /q/.test(word) && !/q/.test(word))
}
//Pour tous les mots on va tester s'il y a la lettre q dans word
// /q/ ça veut dire: est-ce qu'il y a cette lettre dans word.
// et est-ce qu'il n'y a pas de u (la même instruction mais avec la négation)