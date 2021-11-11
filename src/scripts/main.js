import { fetchAuthors, fetchCraftedLetters, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => { 
        render()
    }
    )
    
const render = () => {
        fetchCraftedLetters()
            .then(() => fetchAuthors())
            .then(() => fetchTopics())
            .then(
                () => mainContainer.innerHTML = PenPalSociety()
            )
}

render()