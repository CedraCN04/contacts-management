"use client";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import useIsMobile from "@/lib/hooks/useIsMobile";

export default function SearchBar() {
  const [viewTextfieldSearch, setViewTextfieldSearch] = useState(false);
  const isMobile = useIsMobile();

  const handleSearch = () => {
    setViewTextfieldSearch(!viewTextfieldSearch);
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        fontSize: "14px",
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
              transition: "opacity 0.5s ease-in-out",
              opacity: viewTextfieldSearch || !isMobile ? 1 : 0,
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon onClick={handleSearch} />
              </InputAdornment>
            }
          />
        </>
      )}
    </FormControl>
  );
}

