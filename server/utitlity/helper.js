import fs from "fs/promises"
import { json } from "stream/consumers"

const DB = "/home/abdullah/expressToDo/server/data.json"

async function readcontent() {
    let userData = await fs.readFile(DB,"utf-8")
    return JSON.parse(userData)
}

async function postfunction(content) {
    await fs.writeFile(DB,JSON.stringify(content,null,3))


}

async function putfunction() {
    let userData = await fs.readFile(DB,"utf-8")
    let content = JSON.parse(userData)
    let data = {
        id:1,
        name:"abdullah",
        age:23,
       
    }
    content.push(data)
    await fs.appendFile(DB,JSON.stringify(content,null,2))  
    return JSON.parse(userData)

}





export {readcontent,postfunction}


