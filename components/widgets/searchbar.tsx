"use client";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function SearchBar() {
  const [viewTextfieldSearch, setViewTextfieldSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleSearch = () => {
    setViewTextfieldSearch(!viewTextfieldSearch);
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        fontSize: isMobile ? "14px" : "20px",
        transition: "ease-in-out 0.5s",
      }}
    >
      {isMobile && !viewTextfieldSearch ? (
        <SearchIcon onClick={handleSearch} sx={{ cursor: "pointer" }} />
      ) : (
        <>
          <InputLabel htmlFor="search">Rechercher</InputLabel>
          <Input
            id="search"
            type="text"
            sx={{
              fontSize: isMobile ? "14px" : "20px",
              transition: "opacity 0.5s ease-in-out",
              opacity: viewTextfieldSearch || !isMobile ? 1 : 0,
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon onClick={handleSearch} sx={{ cursor: "pointer" }} />
              </InputAdornment>
            }
          />
        </>
      )}
    </FormControl>
  );
}

