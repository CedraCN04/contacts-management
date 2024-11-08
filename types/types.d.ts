export type Contact = {
  id: string;
  name: string;
  firstname: string;
  email: string;
  phone: string;
};

export interface CreateContactFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}