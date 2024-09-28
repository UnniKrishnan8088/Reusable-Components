import { Box } from "@mui/material";
import { DrawerHeader } from "../../styles";
import React from "react";

type MainContentAreaProps = {
  children: React.ReactNode;
};

export default function MainContentArea({ children }: MainContentAreaProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {children}
    </Box>
  );
}
