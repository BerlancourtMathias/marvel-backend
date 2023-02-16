require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");
// const router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

console.log(
  `la route comics complete : ${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}`
);
console.log("process.env.API_URL", process.env.API_URL);
console.log("process.env.PORT:", process.env.PORT);

app.get("/comics", async (req, res) => {
  console.log(req.query);
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";
  const title = req.query.title || "";
  try {
    const response = await axios.get(
      `${process.env.API_URL}/comics?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&title=${title}`
    );
    console.log(response);
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/characters", async (req, res) => {
  console.log(req.query);
  const limit = req.query.limit || "100";
  const skip = req.query.skip || "0";
  const name = req.query.name || "";

  try {
    const response = await axios.get(
      `${process.env.API_URL}/characters?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}&name=${name}`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(400)(error.message);
  }
});

app.get("/character/:characterId", async (req, res) => {
  console.log("retour req.params : ", req.params);
  console.log("retour characterId :", req.params.characterId);
  try {
    const response = await axios.get(
      `${process.env.API_URL}/character/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    res.status(400)(error.message);
  }
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
