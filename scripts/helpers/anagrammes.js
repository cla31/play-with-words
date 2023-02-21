//15mn08
//Ecrire une fonction anagramme qui à partir du dictionnaire et de lettres
//donne tous les mots ayant exactement ces lettres.
//Donc en gros, pour chercher des mots dans le dictionnaire qui s'écrivent avec les mêmes
//lettres
//d=dictionnaire
//t=texte
//o est une variable qui va récupérer la liste triée et recollée avec join.
//Pourquoi faire ça,
//exemple avec le mot solange:
//je le classe par ordre alphabétique:aeglnos
//puis je regarde chacun des mots du dictionnaire et je vais trier leur lettres pour voir
//si j'ai bien aussi aeglnos.
//Car quand je mettrai en ordre alphabétique ces mots là, j'obtiendrai forcément aeglnos.
//o c'est pour dire ordre.
//Ensuite on va filtrer notre dictionnaire et pour chacun des mots, le mot
//en question doit avoir la longueur de t, donc ici solange, sinon c'est pas la
//peine de continuer:m=>m.length==t.length
//puis ensuite, lorsque je trie un mot par ordre alphabétique, je dois obtenir o
// qui correspond dans notre exemple à aeglnos.

const anagrammeCode = (d, t, o = [...t].sort().join('')) => d.filter(m => m.length == t.length && [...m].sort().join('') == o)

//Voici le code adapté à l'appli:

function anagramme(wordEnter, wordsList) {
    t = wordEnter
    d = wordsList;
    // console.log(t);
    // console.log(d);
    o = [...t].sort().join('');
    // console.log(o);
    return d.filter(m => m.length == t.length && [...m].sort().join('') == o)

}

//Ne fonctionne pas:
// function anagramme(wordEnter, wordsList) {
//     const t = wordEnter
//     const d = wordsList;
//     return (d, t, o = [...t].sort().join('')) => d.filter(m => m.length == t.length && [...m].sort().join('') == o)

// }