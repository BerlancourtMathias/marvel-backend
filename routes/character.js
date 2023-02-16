const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
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

router.get("/character/:characterId", async (req, res) => {
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

module.exports = router;
