import express from "express"

import readcontent from "../../utitlity/helper.js"


const router = express.Router()

router.get("/getusers",async (req,res)=>{
    try {
        let data = await readcontent()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(200).json({msg:error})
    }
})

export default router