//cf https://www.youtube.com/watch?v=RfPR9978bFg
//Formatage des données du fichier .txt en json, puis avec ça, 
//copié collé des données json ds le navigateur pour en faire un fichier.json

fetch('./datas/listeMots.txt')
    .then(response => response.text())
    .then(text => {
        // console.log(text);
        //Retrait des retours à la ligne qui apparaissent en string
        let formattedWords = text.replace(/(\r\n|\n|\r)/gm, " ");
        //transformation des données en ableau JS avec comme séparateur l'espace
        let wordsList = formattedWords.toString().split(" ");
        // console.log(wordsList);
        formattedWordsJSON = JSON.stringify(wordsList)
            // console.log(formattedWordsJSON);
    });