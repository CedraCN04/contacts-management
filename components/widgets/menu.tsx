"use client";

import { commonStyles, fontSizeTypo } from "@/lib/personnalStyles";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { FC, memo } from "react";
import { useState } from "react";
import CreateContactForm from "./createContactForm";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const DrawerList: FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCreateContact = () => {
    setShowContactForm(true);
  }

  return (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      margin: "0 20px",
    }}
  >
    <ListItem>
      <ListItemButton
        sx={{
          bgcolor: blue[300],
          ":hover": {
            bgcolor: blue[200],
          },
          ...commonStyles,
        }}
        onClick={handleCreateContact}
      >
        <AddIcon />{" "}
        <Typography sx={{ ...fontSizeTypo }}>Créer contact</Typography>
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton
        sx={{
          bgcolor: green[500],
          ":hover": {
            bgcolor: green[400],
          },
          ...commonStyles,
        }}
      >
        <StarIcon />{" "}
        <Typography sx={{ ...fontSizeTypo }}>Contacts Favoris</Typography>
      </ListItemButton>
    </ListItem>
    {showContactForm && <CreateContactForm open={showContactForm} setOpen={setShowContactForm}/>}
  </List>
)};

const SideMenu: FC<MenuProps> = ({ open, onClose }) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={onClose}
    sx={{
      transform: "translateX(0px)",
    }}
  >
    <DrawerList />
  </Drawer>
);

export default memo(SideMenu);

