import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export type ClampedTypographyProps = TypographyProps & { lineClamp: number };

export default function ClampedTypography({
  lineClamp,
  ...props
}: ClampedTypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        overflow: "hidden",
        wordWrap: "break-word",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lineClamp,
        display: "-webkit-box",
        ...(props.sx ? props.sx : {}),
      }}
    />
  );
}
