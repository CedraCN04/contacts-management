import SearchIcon from "@mui/icons-material/Search";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";

export default function SearchBar() {
  return (
    <FormControl
      variant="standard"
      sx={{
        fontSize: "14px",
        transition: "ease-in-out 0.5s",
      }}
    >
      <InputLabel htmlFor="search">Rechercher</InputLabel>
      <Input
        id="search"
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

