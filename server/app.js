import express from "express";
import dotenv from "dotenv";
dotenv.config();
import UserRouter from "./controllers/users/index.js"

const app = express();
app.use(express.json())
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    try {
        res.status(200).json({ msg: "hello this is cfi block code" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
});


app.get("/fetch", (req, res) => {
    try {
        res.status(200).json({ msg: "hello this is fetch route" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
});



app.post("/about/:person", (req, res) => {
    try {
        let userdata = req.params.person
        console.log(userdata);

        res.status(200).json({ msg: "this is  ", userdata });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
});

app.post("/contact", (req, res) => {
    try {
        let userdata = req.query
        console.log(userdata);

        res.status(200).json({ userdata });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
});


app.put("/change", (req, res) => {
    try {
        let hello1 = req.body
        console.log(hello1);
        res.status(200).json({ hello1 })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })

    }
})


app.delete("/delete", (req, res) => {
    try {
        let userdata = req.body
        console.log(userdata);

        res.status(200).json({ userdata });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
});

app.use("/users",UserRouter)




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});