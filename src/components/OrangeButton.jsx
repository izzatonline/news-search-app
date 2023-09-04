import { Button, styled } from "@mui/material";

const OrangeButton = styled(Button)({
    backgroundColor: "#F39C12",
    "&:hover": {
        backgroundColor: "#E67E22",
        borderColor: "#F39C12",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#E67E22",
        borderColor: "#F39C12",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

export default OrangeButton;
