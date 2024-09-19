import { React , useState } from "react";
import './App.css';

// Import libary components
import { useDisclosure } from "@mantine/hooks";
import { AppShell} from "@mantine/core";


// Import custom components
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import RouterSwitcher from "./components/RouterSwitcher.jsx";
import GroqChat from "./components/GroqChat.jsx";


function App() {
  const [opened, {toggle}] = useDisclosure();

  return (
    <>
      <AppShell header={{height:"60"}} navbar={{width:"300", breakpoint:"sm", collapsed:{mobile: !opened}}} padding="md">
        <Header opened={opened} toggle={toggle}/>
        <Navbar/>
        <AppShell.Main>
          <RouterSwitcher/>
        </AppShell.Main>
        <AppShell.Footer>
          Built by Aaron Estrellado
        </AppShell.Footer>
      </AppShell> 
      
    </>
  );
}

export default App;
