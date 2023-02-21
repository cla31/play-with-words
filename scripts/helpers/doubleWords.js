//17mn54
//Les mots doubles
// Trouvez tous les mots d'au moins 8 lettres dont les lettres se répètent 
// exactement 2 fois, par exemple "bonbon", "joujou", "couscous","chercher"...

function doubleWords(wordsList) {
    return wordsList.filter(word => word.length >= 8 && /^(.*)\1$/.test(word))
}

// Il faut que la longueur soit plus grande que 8
// et il faut que le mot se répète deux fois, pour cela
// on va utiliser une expression régulière pour dire:
// le mot commence par "un certain nombre de caractères"(.*)
// On met une parenthèse autour pour créer un groupe.
// donc ça sera le groupe n°1, avec une autre parenthèse, ce serait le groupe n°2
// Et comme il faut que ce groupe de lettres se répète, je dois à nouveau à côté avoir le groupe 1
// \1 = "les mêmes doivent se répéter juste à côté"