"use client";

import { generateRandomId, handleClose, saveContact } from "@/lib/functions";
import { Contact, CreateContactFormProps } from "@/types/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function CreateContactForm({
  open,
  setOpen,
}: CreateContactFormProps) {
  const [contact, setContact] = useState<Contact>({
    id: "",
    name: "",
    firstname: "",
    email: "",
    phone: "",
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Créer un contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour créer un contact, veuillez remplir les champs suivants:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nom"
          type="text"
          fullWidth
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <TextField
          margin="dense"
          id="firstname"
          label="Prénom"
          type="text"
          fullWidth
          value={contact.firstname}
          onChange={(e) =>
            setContact({ ...contact, firstname: e.target.value })
          }
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Téléphone"
          type="tel"
          fullWidth
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose}>Annuler</Button>
        <Button
          onClick={() => {
            const newContact = { ...contact, id: generateRandomId("") };
            saveContact(newContact, setOpen);
          }}
        >
          Créer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

