import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
//import Test from './components/Test.jsx'
//import {getGroqChatCompletion} from './api/GroqAPI.jsx'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3000/api').then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error);
    })
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Bro what the
      </p>
    </>
  )
}

export default App
