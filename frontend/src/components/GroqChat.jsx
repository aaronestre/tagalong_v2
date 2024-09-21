// Importing library components
import { React, useState, useEffect } from "react";
import { Grid, Flex, GridCol } from "@mantine/core";
import axios from "axios";

// Import custom components
import SubmitButton from "./SubmitButton";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

function GroqChat() {
  const getContent = (message) => setUserInput(message);

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessages((prevMessages) => [...prevMessages, { text: userInput, type: "user" }]);

    console.log("Submitted");

    try {
      const res = await axios.put("http://localhost:3000/api/chat", {
        content: "You are an expert/fluent in tagalog and you are now a tutor. Using your expertise please help with any questions." + userInput,
      });
      setMessages((prevMessages) => [...prevMessages, { text: res.data.message, type: "bot" }]);
      console.log(res.data.message);
    } catch (err) {
      console.error("Error fetching Groq response:", error.response.data);
      setMessages((prevMessages) => [...prevMessages, { text: "An error occurred", type: "bot" }]);
    }

    e.target.reset();
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid gutter="xs">
          <GridCol span={1}></GridCol>
          <GridCol span={10} mih="79vh" mah="79vh"><Messages messages={messages}/></GridCol>
          <GridCol span={1}></GridCol>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={9}>
            <ChatInput getContent={getContent} />
          </Grid.Col>
          <Grid.Col span={1}>
            <SubmitButton />
          </Grid.Col>
          <Grid.Col span={3}></Grid.Col>
        </Grid>
      </form>
    </>
  );
}

export default GroqChat;
