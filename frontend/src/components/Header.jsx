import React from "react";
import {
  Flex,
  AppShell,
  Burger,
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";

function Header({opened, toggle}) { 
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell.Header>
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ padding: "10px 20px" }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Tagalong</div>
        <Button size="sm" variant="link" onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <IconMoon /> : <IconSun />}
        </Button>
      </Flex>
    </AppShell.Header>
  );
}
export default Header;
