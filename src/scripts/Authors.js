//Generates HTML for the dropdown of authors 

import { getAuthors } from "./dataAccess.js";

export const Authors = () => {

    const authors = getAuthors()
    let html = `
    <fieldset>
    <legend>Author</legend>
    <select id="authors">
    <option value="0">Please choose your author.</option>
    ${
        authors.map(
            (author) => {
                //line 17 returns string interpolation
                return `<option value="${author.id}">$ {author.name}</option>`
            }
            ).join("")
        }
        </select>
        </fieldset>    `
        
        return html //returns html string
    }
