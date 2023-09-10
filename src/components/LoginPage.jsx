import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Snackbar,
    TextField,
    Box,
    Typography,
    Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import OrangeButton from "./OrangeButton";

const CenterBox = styled(Box)({
    backgroundColor: "white",
    width: "300px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";

        if (isUserLoggedIn) {
            setIsLoggedIn(true);
            navigate("/home");
        }
    }, [navigate]);

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            navigate("/home");
        } else {
            setErrorMessage("Invalid credentials");
        }
    };

    return (
        <Grid
            container
            sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}
            direction="column"
        >
            <Grid item>
                <Typography variant="h3">NEWS PORTAL</Typography>
            </Grid>
            <CenterBox>
                <Grid item>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "30ch" },
                        }}
                        noValidate
                        autoComplete="off"
                        justify="center"
                        alignItems="center"
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                defaultValue=""
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                defaultValue=""
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </Box>
                </Grid>
                <div>
                    <OrangeButton variant="contained" onClick={handleLogin}>
                        Login
                    </OrangeButton>
                </div>
                <div>
                    <Snackbar
                        open={errorMessage !== ""}
                        autoHideDuration={6000}
                    >
                        <Alert severity="error">{errorMessage}</Alert>
                    </Snackbar>
                </div>
            </CenterBox>
        </Grid>
    );
};

export default LoginPage;
