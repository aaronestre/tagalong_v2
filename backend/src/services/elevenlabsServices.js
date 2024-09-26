const axios = require("axios");
const { ElevenLabsClient } = require("elevenlabs");

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

async function getElevenVoice(text) {
  try {
    const audioStream = await elevenlabs.generate({
      voice: "Alice",
      model_id: "eleven_multilingual_v2",
      text: text,
    });

    const chunks = [];
    for await (const chunk of audioStream) {
      chunks.push(chunk);
    }
    const content = Buffer.concat(chunks);
    return content;
  } catch (error) {
    throw new Error("Error generating speech: " + error.message);
  }
}

module.exports = { getElevenVoice };
