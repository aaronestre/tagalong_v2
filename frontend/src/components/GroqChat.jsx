import { React, useState } from "react";
import { Grid, Flex, GridCol } from "@mantine/core";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
function GroqChat() {
  const getContent = (message) => setUserInput(message);

  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessages((prevMessages) => [...prevMessages, { text: userInput, type: "user" }]);

    console.log("Submitted");

    try {
      const res = await axios.put("http://localhost:3000/api", {
        content: userInput,
      });
      setResponse(res.data.message);
      setMessages((prevMessages) => [...prevMessages, { text: res.data.message, type: "bot" }]);
    } catch (err) {
      console.error("Error fetching Groq response:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "An error occurred", type: "bot" }]);
      setResponse("An error occurred");
    }

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid gutter="xs">
          <GridCol span={2}></GridCol>
          <GridCol span={8} mih="79vh" mah="79vh"><Messages messages={messages}/></GridCol>
          <GridCol span={2}></GridCol>
          <Grid.Col span={12}></Grid.Col>
          <Grid.Col span={2}></Grid.Col>
          <Grid.Col span={7}>
            <ChatInput getContent={getContent} />
            {response && <p>Response: {response}</p>}
          </Grid.Col>
          <Grid.Col span={1}>
            <SubmitButton />
          </Grid.Col>
          <Grid.Col span={4}></Grid.Col>
        </Grid>
      </form>
    </>
  );
}

export default GroqChat;
