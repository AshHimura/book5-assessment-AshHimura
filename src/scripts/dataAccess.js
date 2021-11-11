const applicationState = {
    authors: [],
    topics: [],
    lettersCrafted: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then(
        (info) => {
            applicationState.authors = info
            console.log("Authors data received")
        }
    )
}

export const getAuthors = () => applicationState.authors.map(t => ({...t}))

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.lettersCrafted = data
        }
    )
}

//export const setAuthorId = (id) => 

export const getTopics = () => applicationState.topics.map(t => ({...t}))

export const fetchCraftedLetters = () => {
    return fetch(`${API}/lettersCrafted`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.lettersCrafted = data
                        
        }
    )
}





export const getLettersCrafted = () => {
    return applicationState.lettersCrafted.map(crafting => ({...crafting}))
}

export const sendCraftedLetter = (userCraftedLetter) => {
    return fetch(`${API}/lettersCrafted`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      })    
        .then(response => response.json())
        .then(() => fetchRequests())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent(stateChanged))
        })
}