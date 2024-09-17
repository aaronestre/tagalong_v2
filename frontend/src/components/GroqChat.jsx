import { React, useState } from "react";
import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

function GroqChat() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("http://localhost:3000/api", {
        content: userInput,
      });
      setResponse(res.data.message);
    } catch (err) {
      console.error("Error fetching Groq response:", error);
      setResponse("An error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <Button type="submit">Submit</Button>
      </form>
      {response && <p>Response: {response}</p>}
    </>
  );
}

export default GroqChat;