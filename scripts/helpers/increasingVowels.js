//12mn59
//Mots croisés voyelles
//Trouver les 11 mots où on peut lire les lettres "a,e,i,o,u" dans cet ordre.
//Par exemple dans "bacteriologique" (remarquez qu'il peut y avoir d'autres voyelles entre chaque)
//13mn25 explication du code.

function increasingVowels(wordsList) {
    return wordsList.filter(word => /^.*a.*e.*i.*o.*u.*$/.test(word))
}

//Donc il faut que ça commence par un ou plusieurs caractères
//.* = ça va de 0 à un nombre illimité de caractères.
//ensuite il y a un a
//à nouveau
//.* quelque chose ou rien
//ensuite un e etc.
//les .* sont éventuellement d'autres lettres intermédiaires.