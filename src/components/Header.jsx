import { Grid, TextField, Typography, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";
import { useState } from "react";
import OrangeButton from "./OrangeButton";

const Header = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = () => {
        onSearch(searchKeyword);
    };

    return (
        <Grid container direction={"row"} spacing={2}>
            <Grid item xs={4}>
                <Typography
                    variant="h5"
                    style={{ textAlign: "left", padding: 10 }}
                >
                    Find My News
                </Typography>
            </Grid>
            <Grid
                container
                xs={4}
                spacing={2}
                style={{ textAlign: "center", padding: 10 }}
            >
                <Grid item>
                    <TextField
                        label="What are you looking for..."
                        size="medium"
                        defaultValue=""
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    ></TextField>
                </Grid>
                <Grid item>
                    <OrangeButton variant="contained" onClick={handleSearch}>
                        <Typography variant="h9">Search</Typography>
                    </OrangeButton>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <div style={{ textAlign: "right", padding: 10 }}>
                    <Chip icon={<FaceIcon />} label="User" variant="outlined" />
                    <Link to="/">
                        <OrangeButton variant="contained" to="/">
                            Logout
                        </OrangeButton>
                    </Link>
                </div>
            </Grid>
        </Grid>
    );
};

export default Header;
