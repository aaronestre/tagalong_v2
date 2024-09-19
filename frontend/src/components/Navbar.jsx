import React from "react";
import { AppShell, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <NavLink
        label="Chat"
        onClick={() => navigate("/chat")}
        style={{ margin: "5px" }}
      >
      </NavLink>
      <NavLink
        label="Error"
        onClick={() => navigate("/error")}
        style={{ margin: "5px" }}
      >
      </NavLink>
    </AppShell.Navbar>
  );
}
export default Navbar;
