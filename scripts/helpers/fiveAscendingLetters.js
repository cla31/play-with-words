// Est-ce qu'on peut trouver des mots de 5 lettres 
// dont les lettres sont classées par ordre alphabétique?
//(ordre croissant)
export function lettersAscendingOrder(wordsList) {
    return wordsList.filter(word => word.length == 5 && [...word].sort().join('') == word)
}
// Explication du code: 
// [...word] on convertit le mot en liste, ça donnne une liste avec les différentes lettres.
//expl avec le mot "alors": ["a", "l", "o", "r", "s"]
//.sort(): "sort" écrit tout seul tri par ordre alphabétique
//.join(''): on join les éléments de cette liste avec rien du tout, donc ça recolle les lettres ensemble
//Dans notre exemple cela donne "alors"
//==word et là on regarde si on obtient les mots du départ,
// En gros, une fois que j'ai trié les lettres est-ce que je retombe sur le mot d'origine?
//Si c'est le cas, j'ai trouvé un mot de 5 lettres tel que en le triant (en triant ces lettres), j'obtient le mot du départ.