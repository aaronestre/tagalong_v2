import { React, useState } from "react";
import { Grid, Flex, GridCol } from "@mantine/core";
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
      <form onSubmit={handleSubmit}>
        <Grid gutter="xs">
          <GridCol span={12}>Big Dog</GridCol>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={8}>
            <ChatInput getContent={getContent} />
            {response && <p>Response: {response}</p>}
          </Grid.Col>
          <Grid.Col span={2}>
            <SubmitButton />
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
        </Grid>
      </form>
    </>
  );
}

export default GroqChat;
