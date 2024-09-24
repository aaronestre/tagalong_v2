import { React, useState, useEffect } from "react";
import { Button, Grid, Loader } from "@mantine/core";
import axios from "axios";
import { play } from "elevenlabs";

import VocabCard from "./VocabCard";
import FetchVocabButton from "./FetchVocabButton";
import { fetchVocab } from "./FetchVocab";
import { fetchVoice } from "./FetchVoice";

function Vocab() {
  const handleFetchVocab = async (e) => {
    try {
      const vocab = await fetchVocab();
      setVocabWord(vocab);
    } catch (err) {
      console.error("Failed to fetch vocab word:", err);
    }
    
  };

  const handleFetchVoice = async (e) => {
    try {
      setLoadingVoice(true);
      await fetchVoice(vocabWord.word);
    } catch (err) {
      console.error("Failed to fetch text-to-speech");
    }
    finally {
      setLoadingVoice(false);
    }
  };

  const setRevealCallback = (reveal) => {
    setReveal(reveal);
  };

  useEffect(() => {
    handleFetchVocab();
  }, []);

  const [vocabWord, setVocabWord] = useState();
  const [front, setFront] = useState("tagalog");
  const [reveal, setReveal] = useState(false);
  const [loadingVoice, setLoadingVoice] = useState(false);

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
        <VocabCard
          vocabWord={vocabWord}
          reveal={reveal}
          front={front}
          setReveal={setRevealCallback}
        />
      </Grid.Col>
      <Grid.Col span={2} />
      <Grid.Col span={8} style={{ display: "flex", justifyContent: "center" }}>
        <FetchVocabButton onClick={handleFetchVocab} text="New Word"/>
      </Grid.Col>
      <Grid.Col span={2} />
      <Grid.Col span={12} style={{ display: "flex", justifyContent: "center" }} >
        <FetchVocabButton onClick={handleFetchVoice} text={loadingVoice ? <Loader size="xs" color="yellow"/> : "Listen"}/>
      </Grid.Col>
    </Grid>
  );
}

export default Vocab;
