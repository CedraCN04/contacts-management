"use client";

import SideMenu from "@/components/widgets/menu";
import "@fontsource/roboto";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Container, IconButton } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useState } from "react";
import SearchBar from "./searchbar";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);

  return (
    <AppBar sx={{ bgcolor: teal[200], color: "black" }} position="static">
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          margin: "10px auto",
          width: { xs: "90%", md: "40%" },
        }}
      >
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
        <SearchBar />
        <Avatar />
      </Container>
      {openMenu && <SideMenu open={true} onClose={closeMenu} />}
    </AppBar>
  );
}

