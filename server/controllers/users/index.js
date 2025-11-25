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




router.put("/update/:id", async (req, res) => {
  try {
    let data = req.params.id;
    let existingData = await readContent();
    if (data <= existingData.length - 1 && data > 0) {
      let newData = req.body;
      existingData[data - 1].name =
        req.body.name || existingData[data - 1].name;
      existingData[data - 1].age = req.body.age || existingData[data - 1].age;
      await writeContent(existingData);
      res.status(201).json({ content: existingData, msg: "Content added" });
    } else {
      res.status(401).json({ msg: "teri aisi ki taisi, INVALID ID" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    let exisitingData = await readContent();
    let newData = exisitingData.filter((x) => x.id != userId);
    await writeContent(newData);
    res.status(200).json({content:newData, msg:"successfully deleted"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router
