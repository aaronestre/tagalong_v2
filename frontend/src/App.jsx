import { React , useState } from "react";
import './App.css';

import { useDisclosure } from "@mantine/hooks";
import {Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme} from "@mantine/core";
import { IconSun, IconMoon } from '@tabler/icons-react';

import GroqChat from "./components/GroqChat.jsx";

function App() {

  const [opened, { toggle }] = useDisclosure();
  const [currentComponent, setCurrentComponent] = useState("Component 1");
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark"); 
  }

  return (
    <>
      <AppShell header={{height:"60"}} navbar={{width:"300", breakpoint:"sm", collapsed:{mobile: !opened}}} padding="md">

        <AppShell.Header>
          <Flex justify={"space-between"} align={"center"} style={{padding:"10px 20px"}}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
            <div>Tagalong</div>
            <Button size="sm" variant="link" onClick={toggleColorScheme}>{computedColorScheme === "dark" ? <IconMoon/> : <IconSun/>}</Button>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md" style={{gap:"10px"}}>
          <Button variant="subtle" onClick={() => setCurrentComponent("Component 1")} style={{margin:"5px"}}>Component 1</Button>
          <Button variant="subtle" onClick={() => setCurrentComponent("Component 2")} style={{margin:"5px"}}>Component 2</Button>
        </AppShell.Navbar>
        <AppShell.Main>
          {currentComponent === "Component 1" ? <h1>Component 1</h1> : <h1>Component 2</h1>}
        </AppShell.Main>
        <AppShell.Footer>
          Built by Aaron Estrellado
        </AppShell.Footer>
      </AppShell> 
      
    </>
  );
}

export default App;
