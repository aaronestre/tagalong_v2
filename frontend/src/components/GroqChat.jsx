import { React, useState } from "react";
import { Paper, Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import ChatInput from "./ChatInput";

function GroqChat() {
  const getContent = (message) => setUserInput(message);

  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
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
      <Container size="30rem" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Paper
          shadow="md"
          padding="md"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        />
        <form onSubmit={handleSubmit}>
          <ChatInput getContent={getContent} />
          <SubmitButton text="Submit" />
        </form>
        {response && <p>Response: {response}</p>}
      </Container>
    </>
  );
}

export default GroqChat;
