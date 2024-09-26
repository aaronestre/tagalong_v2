import React from "react";
import { Card, Text } from "@mantine/core";
import {useHover} from "@mantine/hooks";
import { useState, useEffect } from "react";

function VocabCard({ vocabWord, reveal, front, setReveal }) {

  const {hovered, ref} = useHover();

  return (
    <>
      <Card
        ref={ref}
        shadow="xl"
        padding="xl"
        className="vocab-card"
        radius="lg"
        p="20px"
        w="800px"
        h="400px"
        m="0 auto"
        bd= {hovered ? "1px solid white" : "0"}
        onClick={() => setReveal(!reveal)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text weight={500} size="xl" fw={800} ta="center" fz="90px">
          {reveal ? vocabWord?.english_translation : vocabWord?.word }
        </Text>
        <Text weight={100} size="md" ta="center" fz="20px">
          {reveal ? vocabWord?.english_definition : ""}
        </Text>
      </Card>
    </>
  );
}

export default VocabCard;
