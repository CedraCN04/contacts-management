"use client";

import "@fontsource/roboto";
import { AppBar, Avatar, Container, Typography } from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import SearchBar from "./searchbar";

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: teal[200], color: "black" }} position="static">
      <Container
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
          alignItems: "center",
          margin: "10px auto",
          position: "relative",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 20 }}>
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
  );
}

