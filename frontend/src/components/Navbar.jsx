import React from "react";
import { AppShell, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconSchool } from '@tabler/icons-react';
import { IconBook2 } from '@tabler/icons-react';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <NavLink
        leftSection={<IconSchool />}
        label="Tutor"
        onClick={() => navigate("/chat")}
        style={{ margin: "5px" }}
      />
      <NavLink
        leftSection={<IconBook2 />}
        label="Vocab"
        onClick={() => navigate("/vocab")}
        style={{ margin: "5px" }}
      />
      <div style={{ flexGrow: 1 }}></div>
      <NavLink label="Logout" />
    </AppShell.Navbar>
  );
}
export default Navbar;