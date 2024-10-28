import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contacts Management",
  description: "Gérer vos contacts facilement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}

