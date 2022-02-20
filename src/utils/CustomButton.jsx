import { styled } from "@mui/styles";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)({
  borderRadius: 8,
  width: "100%",
  textTransform: "none",
  background: "#3C6DB4",
  "&:hover": {
    background: "#3C6DB4",
    boxShadow: "inset 0 0 0 3px #0285FD",
  },
});
