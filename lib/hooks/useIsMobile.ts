import { useMediaQuery } from "@mui/material";

const useMobile = () => {
  return useMediaQuery("(max-width:768px)");
}

export default useMobile;