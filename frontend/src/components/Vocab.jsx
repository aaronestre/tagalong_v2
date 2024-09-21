import { React, useState, useEffect } from "react";
import { Button, Card, Text, Grid } from "@mantine/core";
import axios from "axios";

function Vocab() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const prompt =
      "Very strictily follow these instructions: Please provide the following information in a plain JSON format without any Markdown or code block formatting. Always respond in JSON format with following keys: -word: string -tagalog_definition: string -english_translation: string -english_definition: string -example_sentence: string. You are a tagalog teacher and want to help teach someone of any level a new random tagalog word. Generate a random tagalog vocabulary word. Please ensure that you have open and closing brackets every time and there is no other text before or after the  JSON notation";

    try {
      const res = await axios.put("http://localhost:3000/api/vocab", {
        content: prompt,
      });
      //console.log(res.data.message);
      const vocab = JSON.parse(res.data.message);
      setVocabWord(vocab);
    } catch (err) {
      console.error("Error fetching Groq response:", err.response.data);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const [vocabWord, setVocabWord] = useState();
  const [tagalog, setTagalog] = useState(true);

  return (
    <Grid>
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12} />
      <Grid.Col span={12}>
        <Card
          shadow="xl"
          padding="xl"
          className="vocab-card"
          p="20px"
          w="800px"
          h="400px"
          m="0 auto"
          onClick={() => setTagalog(!tagalog)}
          style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignContent: "center"}}
        >
          <Text weight={500} size="xl" fw={800} ta="center" fz="90px">
            {capitalizeFirstLetter(tagalog ? vocabWord?.word : vocabWord?.english_translation)}
          </Text>
          <Text weight={100} size="md" ta="center" fz="20px"> 
            {capitalizeFirstLetter(tagalog ? "" : vocabWord?.english_definition)}
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={1} />
      <Grid.Col span={10} style={{display: "flex", justifyContent: "center"}}>
        <Button
          onClick={handleSubmit}
          size="md"
          variant="gradient"
          gradient={{ from: "orange", to: "red", deg: 270 }}
          radius="xl"
          m="0 auto"
        >
          New Word
        </Button>
      </Grid.Col>
      <Grid.Col span={1} />
    </Grid>
  );
}

export default Vocab;
