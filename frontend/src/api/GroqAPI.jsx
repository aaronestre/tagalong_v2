import Groq from "groq-sdk";

const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion("tell me a random joke");
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion(content) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();