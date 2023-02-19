// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "connexion ok ✔️" });
});

app.listen(process.env.PORT, () => {
  console.log(`started`);
});
