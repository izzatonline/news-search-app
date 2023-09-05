import MyFavouritesPanel from "./MyFavouritesPanel";
import DisplayResults from "./DisplayResults";
import { Grid } from "@mui/material";
import Header from "./Header";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [myFavourites, setMyFavourites] = useState(() => {
        const storedFavorites = localStorage.getItem("myFavourites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
    };

    const updatemyFavourites = (newsItem) => {
        const updatedFavourites = [...myFavourites, newsItem];
        setMyFavourites(updatedFavourites);
        localStorage.setItem("myFavourites", JSON.stringify(updatedFavourites));
    };

    const clearmyFavourites = () => {
        setMyFavourites([]);
    };

    const removeFromFavourites = (newsItemToRemove) => {
        setMyFavourites((prevFavourites) =>
            prevFavourites.filter((item) => item !== newsItemToRemove)
        );

        const updatedFavorites = myFavourites.filter(
            (item) => item !== newsItemToRemove
        );
        localStorage.setItem("myFavourites", JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const savedFavorites = localStorage.getItem("myFavourites");
        if (savedFavorites) {
            setMyFavourites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <Grid container className="main-container" direction={"column"}>
            <Grid
                className="header-container"
                item
                lg={1}
                style={{ maxHeight: "10vh" }}
                marginBottom={2}
            >
                <Header onSearch={handleSearch} />
            </Grid>
            <Grid className="content-container" item lg={11}>
                <Grid container direction="row" style={{ height: "100%" }}>
                    <Grid
                        className="left-panel-container"
                        item
                        lg="2"
                        marginRight={3}
                    >
                        <MyFavouritesPanel
                            style={{ overflowY: "scroll" }}
                            myFavourites={myFavourites}
                            clearmyFavourites={clearmyFavourites}
                        ></MyFavouritesPanel>
                    </Grid>
                    <Grid className="result-container" item lg="9.5">
                        <DisplayResults
                            searchKeyword={searchKeyword}
                            updatemyFavourites={updatemyFavourites}
                            removeFromFavourites={removeFromFavourites}
                        ></DisplayResults>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
