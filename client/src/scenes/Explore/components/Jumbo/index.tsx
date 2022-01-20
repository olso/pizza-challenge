import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useHoverDirty } from "react-use";

import mozarella from "../../../../static/images/mozarella.png";
import mozarellaRed from "../../../../static/images/mozarella-red.png";

export default function Jumbo() {
  const imageRef = React.useRef(null);
  const isHovering = useHoverDirty(imageRef);

  return (
    <Box
      sx={{
        background: ({ palette }) =>
          `linear-gradient(${palette.xBackground.secondary} 85%, transparent 15%)`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">
          Traditional fresh pizza since 20 BC.
        </Typography>
        <Box
          component="figure"
          sx={{
            width: "100%",
            // marginRight: "auto",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box
            ref={imageRef}
            component="img"
            src={isHovering ? mozarellaRed : mozarella}
            sx={{
              height: "auto",
              width: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
