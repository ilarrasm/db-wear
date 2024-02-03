import Footer from "@/features/Footer/Footer";
import Header from "@/features/Header/Header";
import { Box } from "@mui/material";
import React, { ReactNode, memo } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => (
  <Box
    display="flex"
    flexDirection="column"
    minHeight="100vh"
    justifyContent="space-between"
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default memo(DefaultLayout);
