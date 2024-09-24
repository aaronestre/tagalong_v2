import { React, useState, useEffect } from "react";
import { Button } from "@mantine/core";
import axios from "axios";

import { fetchVocab } from "./FetchVocab";

const FetchVocabButton = ({onClick, text}) => { 

    return (
        <Button
          onClick={onClick}
          size="md"
          variant="gradient"
          gradient={{ from: "orange", to: "red", deg: 270 }}
          radius="xl"
          m="0 auto"
        >
          {text}
        </Button>
    )

}

export default FetchVocabButton;