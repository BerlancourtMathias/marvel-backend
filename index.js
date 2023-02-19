// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.status(200).json({ message: "connexion ok ✔️" });
});

app.listen(process.env.PORT, () => {
  console.log(`started`);
});
