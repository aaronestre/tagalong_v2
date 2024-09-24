import { React, useState, useEffect } from "react";
import { Button } from "@mantine/core";
import axios from "axios";

import { fetchVocab } from "./FetchVocab";

const FetchVocabButton = ({onClick}) => { 

    return (
        <Button
          onClick={onClick}
          size="md"
          variant="gradient"
          gradient={{ from: "orange", to: "red", deg: 270 }}
          radius="xl"
          m="0 auto"
        >
          New Word
        </Button>
    )

}

export default FetchVocabButton;