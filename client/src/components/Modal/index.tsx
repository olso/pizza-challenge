import {
  Box,
  Modal as MuiModal,
  ModalProps as MuiModalProps,
} from "@mui/material";

type ModalProps = MuiModalProps;
export default function Modal(props: ModalProps) {
  return (
    <MuiModal
      keepMounted={false}
      disableAutoFocus
      {...props}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            sm: "auto",
          },
          backgroundColor: ({ palette }) => palette.xBackground.primary,
          border: ({ palette }) => `2px solid ${palette.text.secondary}`,
          boxShadow: 24,
          p: 4,
        }}
      >
        {props.children}
      </Box>
    </MuiModal>
  );
}
