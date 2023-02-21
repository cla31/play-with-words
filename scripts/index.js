import { handleWords } from "./handleWords.js";
import { getWords, pathJsonWordsList } from "./service/service.js";

async function orchestrator(pathJson) {
    try {
        const wordsList = await getWords(pathJson);
        handleWords(wordsList);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonWordsList)