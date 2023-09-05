import { Grid, LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import OrangeButton from "./OrangeButton";
import NewsItem from "./NewsItem";

const DisplayResults = ({
    searchKeyword,
    updatemyFavourites,
    removeFromFavourites,
}) => {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        const fetchNewsData = async () => {
            setIsLoading(true);
            const apiKey = "6bf6d1bcba094265b743b04313cd871f";
            const pageSize = 8;

            const apiUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}&sortBy=publishedAt&q=${searchKeyword}&searchIn=title&pageSize=${pageSize}&page=${pageNo}&language=en`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const newArticles = data.articles || data.items || [];

                if (pageNo === 1) {
                    setNewsData(newArticles);
                } else {
                    setNewsData((prevNewsData) => [
                        ...prevNewsData,
                        ...newArticles,
                    ]);
                }
            } catch (error) {
                console.error("Error fetching news data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewsData();
    }, [searchKeyword, pageNo]);

    const handleLoadMore = () => {
        setPageNo(pageNo + 1);
    };

    return (
        <div className="results-grid">
            <Grid container spacing={3}>
                {newsData.map((newsItem, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <NewsItem
                            newsItem={newsItem}
                            updatemyFavourites={updatemyFavourites}
                            removeFromFavourites={removeFromFavourites}
                        />
                    </Grid>
                ))}
                <Grid
                    item
                    xs={12}
                    margin={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    {isLoading && <LinearProgress />}
                    {newsData.length > 0 && (
                        <OrangeButton
                            variant="contained"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </OrangeButton>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

export default DisplayResults;
