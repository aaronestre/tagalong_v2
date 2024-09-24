import axios from "axios";


export const fetchVocab = async () => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    const prompt =
      "Very strictily follow these instructions: Please provide the following information in a plain JSON format without any Markdown or code block formatting. Always respond in JSON format with following keys: -word: string -tagalog_definition: string -english_translation: string -english_definition: string -example_sentence: string. You are a tagalog teacher and want to help teach someone of any level a new random tagalog word. Generate a random tagalog vocabulary word and please reference a tagalog dictionary while generating. Please ensure that you have open and closing brackets every time and there is no other text before or after the JSON notation. Please keep the english_translation key to below 5 words";

    try {
      const res = await axios.put("http://localhost:3000/api/vocab", {
        content: prompt,
      });
      const vocab = JSON.parse(res.data.message);
      vocab["word"] = capitalizeFirstLetter(vocab["word"]);
      vocab["english_translation"] = capitalizeFirstLetter(vocab["english_translation"]);
      vocab["english_definition"] = capitalizeFirstLetter(vocab["english_definition"]);
      return vocab;
    } catch (err) {
      console.error("Error fetching Groq response:", err);
      throw err;
    }
  };