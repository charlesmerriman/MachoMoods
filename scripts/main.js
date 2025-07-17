import { database } from "./database.js "
import { generateHTML } from "./moods.js"

const container = document.querySelector('#container')

const htmlString = generateHTML(database)

container.innerHTML = htmlString

