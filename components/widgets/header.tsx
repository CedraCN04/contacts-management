"use client";

import SideMenu from "@/components/widgets/menu";
import "@fontsource/roboto";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import { useState } from "react";
import SearchBar from "./searchbar";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <AppBar sx={{ bgcolor: teal[200], color: "black" }} position="static">
        <Container
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
            margin: "10px auto",
            position: "relative",
          }}
        >
          <IconButton onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "14px", md: "20px" } }}
          >
            Contacts
          </Typography>
          <SearchBar />
          <Avatar
            sx={{ width: 30, height: 30, color: "black", bgcolor: blue[300] }}
          >
            C
          </Avatar>
        </Container>
      </AppBar>
      <SideMenu open={openMenu} onClose={toggleMenu} />
    </>
  );
}

