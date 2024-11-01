import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import {
  Container,
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
  const DrawerList = (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <ListItem sx={{ xs: { width: "60%" }, md: { width: "100%" } }}>
        <ListItemButton
          sx={{
            bgcolor: blue[300],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: 20,
          }}
        >
          <AddIcon /> <Typography>Créer contact</Typography>
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
  );

  return (
    <Container sx={{ xs: { width: 250 }, md: { width: 600 } }}>
      <Drawer anchor="left" open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </Container>
  );
}

