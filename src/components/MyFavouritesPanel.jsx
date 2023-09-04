import { Grid, Typography } from "@mui/material";
import OrangeButton from "./OrangeButton";
import { Link } from "react-router-dom";

const MyFavouritesPanel = ({ myFavourites, clearmyFavourites }) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Typography variant="h6">
                        My Favourites: {myFavourites.length}
                    </Typography>
                </Grid>
                <Grid item>
                    <OrangeButton
                        variant="contained"
                        onClick={clearmyFavourites}
                    >
                        <Typography>Clear</Typography>
                    </OrangeButton>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <ul>
                        {myFavourites.map((favourite, index) => (
                            <li key={index}>
                                <Link
                                    to={favourite.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-style"
                                >
                                    <h3>{favourite.title}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </>
    );
};

export default MyFavouritesPanel;
