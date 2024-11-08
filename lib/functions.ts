import { Contact } from "@/types/types";

export const saveContact = (contact: Contact, setOpen: (open: boolean) => void) => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  handleClose(setOpen);
};

export const handleClose = (setOpen: (open: boolean) => void) => {
  setOpen(false);
}

export const generateRandomId = (id: string) => {
  id = Math.random().toString(36).substring(2);
  return id;
};