import { Box, Dialog } from "@mui/material";
import React, { ReactNode, memo } from "react";

interface LightBoxProps {
  children: ReactNode;
  open: boolean;
  setOpen: () => void;
}

const LightBox = ({ children, open, setOpen }: LightBoxProps) => {
  return (
    <Dialog
      open={open}
      onClick={(e) => {
        e.stopPropagation();
        if (!open) setOpen();
      }}
      maxWidth={false}
      sx={{
        "& .MuiDialog-paper": { 
          backgroundColor: "transparent",
          position: "relative",
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default memo(LightBox);
