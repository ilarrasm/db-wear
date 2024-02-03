import React, { useEffect, useState } from "react";
import { memo } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { default as ImageProps } from "@/domain/models/Image";
import dynamic from "next/dynamic";

const LightBox = dynamic(() =>  import("@/features/LightBox/LightBox"), {ssr: true});

const ProductDetailsHeader = ({ image }: { image: ImageProps[] }) => {
  const [isLightBoxOpen, setOpenLight] = useState(false);
  useEffect(() => {
    console.log(isLightBoxOpen);
  }, [isLightBoxOpen]);
  return (
    <Box
      position="relative"
      height="100%"
      sx={{
        ".&": { cursor: "pointer", userSelect: "none" },
        body: { overflowY: "hidden" },
      }}
      onClick={() => {
        setOpenLight(true);
      }}
    >
      <Image
        src={image[0].src}
        alt={image[0].alt}
        fill
        style={{ objectFit: "cover" }}
      />
      <LightBox
        open={isLightBoxOpen}
        setOpen={() => {
          console.log("sape");
          setOpenLight(false);
        }}
        images={[
          <Box
            position="relative"
            height="100%"
            sx={{
              cursor: "pointer",
              " -webkit-tap-highlight-color": "transparent",
            }}
            key="firstImage"
          >
            <Image
              src={image[0].src}
              alt={image[0].alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>,
        ]}
      />
    </Box>
  );
};

export default memo(ProductDetailsHeader);
