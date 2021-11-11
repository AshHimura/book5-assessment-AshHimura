import { Authors } from "./Authors.js"

export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="letterFormat">
            ${Authors()}
        </section>
    `
}