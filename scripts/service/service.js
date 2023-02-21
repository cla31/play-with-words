//Après création du fichier json grâce à un copié collé dans le navigateur
//mise en place du fetch pour récupérer les données en asynchrone:
const pathJsonWordsList = "./datas/listeMots.json";
// Fonction pour récupérer les données via le fetch
async function getWords(pathJson) {
    try {
        const fetchWords = await fetch(pathJson);
        const responseFetchWords = await fetchWords.json();
        console.log("response Fetch Words", responseFetchWords);
        return responseFetchWords;
    } catch (erreur) {
        console.log(erreur);
    }
}