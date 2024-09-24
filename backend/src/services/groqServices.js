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

async function getGroqVocabWord(content) {
    return await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: content,
            },
        ],
        model: "llama3-8b-8192",
        temperature: 1,
        response_format: { type: "json_object" },
    });
}

module.exports = { getGroqChatCompletion, getGroqVocabWord };
