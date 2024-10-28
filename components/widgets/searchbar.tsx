"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [viewTextfieldSearch, setViewTextfieldSearch] = useState(false);

  const handleSearch = () => {
    setViewTextfieldSearch(!viewTextfieldSearch);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <SearchIcon onClick={handleSearch} />
      <TextField
        sx={{
          width: { xs: "100%", sm: "300px" },
          display: viewTextfieldSearch ? "flex" : "none",
        }}
        id="search"
        label="Rechercher"
        variant="standard"
      />
    </Container>
  );
}

