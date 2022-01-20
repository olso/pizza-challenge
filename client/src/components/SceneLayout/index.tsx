import React from "react";
import { Container } from "@mui/material";

import AppBar from "./components/AppBar";

type Props = React.PropsWithChildren<{
  banner?: React.ReactElement;
}>;
export default function SceneLayout({ children, banner }: Props) {
  return (
    <>
      <AppBar />
      {banner}
      <Container>{children}</Container>
    </>
  );
}
