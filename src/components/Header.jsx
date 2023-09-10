import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import OrangeButton from "./OrangeButton";
import { Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#808080", // Gray background color
});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const Header = ({ onSearch, isLoggedIn }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        onSearch(searchKeyword);
    };

    const handleLogout = () => {
        // Handle logout logic here, e.g., clearing login status
        // You can replace this with your actual logout logic
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        FIND MY NEWS
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            defaultValue=""
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                        <OrangeButton
                            variant="contained"
                            onClick={handleSearch}
                        >
                            <Typography variant="h9">Search</Typography>
                        </OrangeButton>
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{ display: { xs: "none", md: "flex" } }}
                        marginRight={1}
                    >
                        <Chip
                            icon={<FaceIcon style={{ color: "white" }} />}
                            label="ADMIN"
                            variant="filled"
                            style={{
                                backgroundColor: "#F39C12",
                                color: "white",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{ display: { xs: "none", md: "flex" } }}
                        spacing={1}
                    >
                        {isLoggedIn && (
                            <OrangeButton
                                variant="contained"
                                onClick={handleLogout}
                            >
                                Logout
                            </OrangeButton>
                        )}
                    </Box>
                </Toolbar>
            </StyledAppBar>
        </Box>
    );
};

export default Header;
