import { React, useState } from "react";
import { TextInput, Group } from "@mantine/core";
import SubmitButton from "./SubmitButton";

function ChatInput({ getContent }) {
  return (
    <>
      <Group>
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

      </Group>
    </>
  );
}

export default ChatInput;
