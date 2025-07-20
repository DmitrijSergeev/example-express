import express from "express";
import {createAtHome, getHomePage} from "./controllers/home";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", getHomePage)
app.post("/", createAtHome)

app.get("/about", (req, res) => {
    res.send("<h1>Hellp from About Page</h1>");
})

app.all("*path", (req, res) => {
    res.status(404).send("<h1>Nothing Found</h1>");
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});