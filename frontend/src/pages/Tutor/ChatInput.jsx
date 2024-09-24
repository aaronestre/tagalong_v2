import { React, useState } from "react";
import { TextInput } from "@mantine/core";
import SubmitButton from "./SubmitButton";

function ChatInput({ getContent }) {
  return (
    <>
      <TextInput
        size="md"
        radius="xl"
        variant="filled"
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
