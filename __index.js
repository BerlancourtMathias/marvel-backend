require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes import
const characterRoutes = require("./routes/character");
const comicsRoutes = require("./routes/comics");

//Use of routes by the server
app.use(characterRoutes);
app.use(comicsRoutes);

//Checks
// console.log(
//   `example of the complete route /comics url to the API : ${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}`
// );
// console.log("process.env.API_URL", process.env.API_URL);
// console.log("process.env.PORT:", process.env.PORT);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "connexion ok ✔️" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});

app.listen(process.env.PORT | 4000, () => {
  console.log(`
    ----------------------------------
    |🦸‍♀️ 🦸 🦸‍♂️ Server started on        
    ----------------------------------
    | 🔌${process.env.PORT} 🦹🏻 🦹🏾‍♂️ 🦹🏼‍♀️   
    ----------------------------------
    
        `);
});
