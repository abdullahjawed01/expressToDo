import fs from "fs/promises"

const DB = "/home/abdullah/expressToDo/server/data.json"

async function readcontent() {
    let userData = await fs.readFile(DB,"utf-8")
    return JSON.parse(userData)
}

export default readcontent