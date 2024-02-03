import {  Box, Dialog } from "@mui/material";
import React, { ReactNode, memo } from "react";

interface LightBoxProps {
  images: ReactNode[];
  open: boolean;
  setOpen: () => void;
}

const LightBox = ({ images, open, setOpen }: LightBoxProps) => {
  return (
    <Dialog
      open={open}
      onClick={(e) => {
        e.stopPropagation();
        setOpen();
      }}
      maxWidth={false}
      sx={{ "& .MuiDialog-paper": { backgroundColor: "transparent" } }}
    >
      <Box width="90vw" height="90vh" borderRadius="8px" overflow="hidden">
        {...images}
      </Box>
    </Dialog>
  );
};

export default memo(LightBox);
