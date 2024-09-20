const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(content) {
    return await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: content,
            },
        ],
        model: "llama3-8b-8192",
        temperature: 0.8
    });
}

module.exports = { getGroqChatCompletion };
