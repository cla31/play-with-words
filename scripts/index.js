async function orchestrator(pathJson) {
    try {
        const wordsList = await getWords(pathJson);
        //////////////LISTE DE MOTS GENERALE///////////////////////////
        console.log("La liste de mots générale");
        console.log("listWords", wordsList);
        //////////////MOTS DE 5 LETTRES CLASSES PAR ORDRE ALPHABETHIQUE///////////////////////////
        const listWordslettersAscendingOrder = lettersAscendingOrder(wordsList);
        console.log("Mots de 5 lettres dont les lettres sont classées par ordre alphabétique:");
        console.log(listWordslettersAscendingOrder);
        //////////////Q MAIS PAS U///////////////////////////SCRABBLE        
        console.log("les mots qui contiennent un Q mais pas de U:");
        const listWordsWithQbutNotU = qButNotU(wordsList)
        console.log(listWordsWithQbutNotU);
        //////////////PALINDROMES LES PLUS LONGS DU DICTIONNAIRE//////////////////////// 
        console.log("les palindromes les plus longs du dictionnaire:");
        const listLonguestPalindrome = longuestPalindrome(wordsList);
        console.log(listLonguestPalindrome);
        //////////////LES MOTS CROISES////////////////////////SCRABBLE cf croddword.js pour ce cas
        const crossWordsList = withUnknownLetters(wordsList);
        console.log("J'ai 4 lettres inconnues et je cherche un mot où il y a un a et un f");
        console.log(crossWordsList);
        console.log("**********************************************************************************************");
        console.log("**********************************************************************************************");
        console.log("**********************************************************************************************");
        console.log("************************Même chose mais à modéliser selon les cas***************************");
        const crosswordsList = withUnknownOthersLetters(wordsList);
        console.log(crosswordsList);
        console.log("**********************************************************************************************");
        console.log("**********************************************************************************************");
        console.log("**********************************************************************************************");
        console.log("**********************************************************************************************");

        //////////////LES VOYELLES CROISSANTES/////////////////////////
        const increasingVowelsList = increasingVowels(wordsList);
        console.log("Liste de mots où on peut lire les lettres a,e,i,o,u dans cet ordre.");
        console.log(increasingVowelsList);
        //////////////ANAGRAMME////////////////////////////////////////////////////
        const anagrammesList = anagramme("laraviet", wordsList);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("Les anagrammes recherchés:");
        console.log(anagrammesList);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        //////////////DOUBLES MOTS////////////////////////////////////////////////////
        const doubleWordsList = doubleWords(wordsList)
        console.log("Les mots doubles recherchés:");
        console.log(doubleWordsList);
        //////////////////////////12 LETTRES////////////////////////////////////////
        const twelveLettersList = twelveLetters(wordsList);
        console.log("Trouver le seul mot de 12 lettres qui s'écrit sous la forme de 3 lettres (groupe A) suivi encore de 3 lettres (groupe B) puis à nouveau le groupe B et le groupe A");
        console.log(twelveLettersList);



    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonWordsList)