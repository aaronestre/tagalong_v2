const express = require("express");
const router = express.Router();
const { getElevenVoice } = require("../services/elevenlabsServices.js");

router.put("/voice", async (req, res) => {
  const {text} = req.body;

  try {
    const audioBuffer = await getElevenVoice(text);
    res.setHeader("Content-Type", "audio/mpeg"); // Specify the correct audio type (MPEG in this case)
    res.setHeader("Content-Length", audioBuffer.length); // Set content length
    res.send(audioBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch voice boi" });
  }
});

router.get("/test", async (req, res) => {
    
    res.send("Please work");
  
  });

module.exports = router;
