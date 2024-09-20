import React from "react";
import { Paper, Text, ScrollArea } from "@mantine/core";

function Messages({messages}) {
  return (
    <ScrollArea h="100%">
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem, overflowY: auto",
        }}
      >
        {messages.map((msg, index) => (
          <Paper
            key={index}
            m="10px"
            padding="md"
            shadow="lg"
            radius="lg"
            bg={msg.type === "bot" ? "#f1f1f1" : "#007bff"}
            style={{
              alignSelf: msg.type === "bot" ? "flex-start" : "flex-end",
              color: msg.type === "bot" ? "#000" : "#fff",
            }}
          >
            <Text m="15px" maw="450px">
              {msg.text}
            </Text>
          </Paper>
        ))}
      </div>
    </ScrollArea>
  );
}

export default Messages;
