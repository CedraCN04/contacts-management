import useMobile from "@/lib/hooks/useIsMobile";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: MenuProps) {
  const isMobile = useMobile();

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ListItem sx={{ width: "60%" }}>
          <ListItemButton
            sx={{
              bgcolor: blue[300],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            {isMobile ? <AddIcon /> : "Créer un contact"}
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{
              bgcolor: green[500],
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: 20,
            }}
          >
            <StarIcon /> <Typography>Contacts Favoris</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
}

