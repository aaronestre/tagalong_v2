import React from "react";
import { Button } from "@mantine/core";

function SubmitButton({ text }) {
  return (
    <>
      <Button
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 270 }}
        radius="xl"
        type="submit"
      >
        {text}
      </Button>
    </>
  );
}

export default SubmitButton;
