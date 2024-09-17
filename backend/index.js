const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk')
const app = express();
dotenv.config({
    path: '../frontend/.env'
})

const groq = new Groq({apiKey: process.env.GROQ_API_KEY });

app.use(cors());
app.use(express.json());

app.put('/api', async (req, res) => { 
    try {
        const content = req.body.content;
        const chatCompletion = await getGroqChatCompletion(content);
        res.send({message: chatCompletion.choices[0]?.message?.content});
    }
    catch (error) {
        console.error('Error getting Groq completion:', error);
        res.status(500).send({ error: 'Failed to get Groq completion' });
    }
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

async function getGroqChatCompletion(content) {
    return await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 2
    });
  }
  