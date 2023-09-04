import React, { useState } from "react";
import { Card, CardContent, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./NewsItem.css";
import { Link } from "react-router-dom";

const NewsItem = ({ newsItem, updatemyFavourites, removeFromFavourites }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavourites(newsItem);
        } else {
            updatemyFavourites(newsItem);
        }
        setIsFavorite(!isFavorite);
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Card className="news-card">
            <Link
                to={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
            >
                <div className="news-header">
                    <div className="source-icon">
                        {newsItem.source.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="source-details">
                        <span>{newsItem.source.name}</span>
                        <span>{formatDate(newsItem.publishedAt)}</span>
                    </div>
                </div>
                {newsItem.urlToImage && (
                    <img
                        className="news-thumbnail"
                        src={newsItem.urlToImage}
                        alt={newsItem.title}
                    />
                )}
                <CardContent>
                    <h3 className="news-headline">{newsItem.title}</h3>
                </CardContent>
            </Link>
            <IconButton
                className="favorite-icon"
                color={isFavorite ? "secondary" : "default"}
                onClick={handleFavoriteClick}
            >
                <FavoriteIcon />
            </IconButton>
        </Card>
    );
};

export default NewsItem;
