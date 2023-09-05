import { Grid, Typography } from "@mui/material";
import OrangeButton from "./OrangeButton";
import { Link } from "react-router-dom";

const MyFavouritesPanel = ({ myFavourites, clearmyFavourites }) => {
    const handleClearFavourites = () => {
        localStorage.removeItem("myFavourites");
        clearmyFavourites();
    };

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                marginLeft={1}
            >
                <Grid item>
                    <Typography variant="h6">
                        My Favourites: {myFavourites.length}
                    </Typography>
                </Grid>
                <Grid item marginRight={3}>
                    <OrangeButton
                        variant="contained"
                        onClick={handleClearFavourites}
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
                                    <h4>{favourite.title}</h4>
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
