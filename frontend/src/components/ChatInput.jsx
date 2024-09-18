import { React, useState } from "react";
import { TextInput } from "@mantine/core";

function ChatInput({ getContent }) {

  return (
    <>
      <TextInput
        size="md"
        radius="xl"
        placeholder="Ask a question"
        type="text"
        onChange={(e) => {
            getContent(e.target.value);
        }}
      />
    </>
  );
}

export default ChatInput;
