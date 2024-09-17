import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
//import Test from './components/Test.jsx'
//import {getGroqChatCompletion} from './api/GroqAPI.jsx'

import './App.css'
function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("http://localhost:3000/api", {content: userInput});
      setResponse(res.data.message);
    }
    catch (err) {
      console.error('Error fetching Groq response:', error);
      setResponse('An error occurred');
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me something..."
          />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response}</p>}
    </>
  )
}

export default App
