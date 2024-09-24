import { React, useState, useEffect } from "react";
import { Button, Grid } from "@mantine/core";
import axios from "axios";

import VocabCard from "./VocabCard";
import FetchVocabButton from "./FetchVocabButton";
import { fetchVocab } from "./FetchVocab";

function Vocab() {

  const handleFetchVocab = async (e) => {
    try {
      const vocab = await fetchVocab();
      setVocabWord(vocab);
    } catch (err) {
      console.error("Failed to fetch vocab word:", err);
    }
  };

  const setVocabWordCallback = (word) => { 
    setVocabWord(word);
  }

  const setRevealCallback = (reveal) => {
    setReveal(reveal);
  }

  useEffect(() => {
    handleFetchVocab();
  }, []);

  const [vocabWord, setVocabWord] = useState();
  const [front, setFront] = useState("tagalog");
  const [reveal, setReveal] = useState(false);

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
        <VocabCard vocabWord={vocabWord} reveal={reveal} front={front} setReveal={setRevealCallback} />
      </Grid.Col>
      <Grid.Col span={2} />
      <Grid.Col span={8} style={{display: "flex", justifyContent: "center"}}>
        <FetchVocabButton onClick={handleFetchVocab} />
      </Grid.Col>
      <Grid.Col span={2} />
    </Grid>
  );
}

export default Vocab;
