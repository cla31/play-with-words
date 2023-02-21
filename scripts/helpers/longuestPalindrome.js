//Quels sont les plus longs palindromes dans le dictionnaire?
// Le palindrome est un mot qui se lit dans les 2 sens.

export function longuestPalindrome(wordList) {
    return wordList.filter(word => [...word].reverse().join('') == word)
        .sort((a, b) => b.length - a.length)
        .filter((word, k, d) => word.length == d[0].length)

}

//Avec filter on trouve tous les palindromes de la liste.
//Puis ensuite, avec sort on tri la liste précédente (qui vient d'être filtrée)
//On tri par longueur de b - longueur de a
//car quand (a,b) associe => a-b, on va avoir un tri croissant.
// et quand (a,b) => b-a là on a un tri décroissant.
// Et là c'est ce que l'on fait avec un tri par la longueur du mot avec le plus grand au début.
//Ensuite on cherche un palindrome comme le plus grand: est-ce qu'il est tout seul
//ou est-ce qu'il y en a d'autre?
//Alors on filtre tout ce qu'on a fait avant en regardant les mots (word), k
//c'est le rang, et d c'est le tableau qui correspond à ce qu'il y a eu avant, à tout
//tout ce que je suis entrain de filtrer quoi..(ce qui a été filtré par le premier filter
//puis par le sort)
//ce tableau correspond à la variable d
//Et on regarde la longueur du mot tel que cette longueur du mot soit la même
// que le mot qui est à la première position (de la liste triée par le sort()).
//donc en gros on cherche le premier mot de la liste triée par le sort()
// donc on garde tous les mots qui ont la même longueur que le premier.
//Et ainsi j'aurais le plus long palindrome.