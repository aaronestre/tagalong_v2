const express = require('express');
const router = express.Router();
const { getGroqChatCompletion } = require('../services/groqServices.js');

router.put('/', async (req, res) => {
    try {
        const { content } = req.body;
        const chatCompletion = await getGroqChatCompletion(content);
        res.send({ message: chatCompletion.choices[0]?.message?.content });
    } catch (error) {
        console.error('Error getting Groq completion:', error);
        res.status(500).send({ error: 'Failed to get Groq completion' });
    }
});

module.exports = router;