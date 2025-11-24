import express from "express"

import {readcontent,postfunction} from "../../utitlity/helper.js"



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


router.post("/postusers",async (req,res) => {
    try {
        
        let olddata =  await readcontent()
        let data = req.body
         olddata.push(data)
         await postfunction(olddata)
         res.status(200).json(olddata)
    } catch (error) {
        console.log(error);
        res.status(200).json({msg:error})
    }
})




router.put("/renameusers",async(req,res)=>{
    try {
        
        
    } catch (error) {
        console.log(error);
        res.status(200).json({msg:error})
    }
})

export default router