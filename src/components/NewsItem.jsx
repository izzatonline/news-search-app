import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { CardActionArea } from "@mui/material";

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
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }}>
                            <div className="source-icon">
                                {newsItem.source.name.charAt(0).toUpperCase()}
                            </div>
                        </Avatar>
                    }
                    title={
                        <Typography variant="subtitle1" fontWeight="bold">
                            {newsItem.source.name}
                        </Typography>
                    }
                    subheader={
                        <Typography variant="body2" fontWeight="bold">
                            {formatDate(newsItem.publishedAt)}
                        </Typography>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={newsItem.urlToImage}
                    alt={newsItem.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {newsItem.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    className="favorite-icon"
                    color={isFavorite ? "secondary" : "default"}
                    onClick={handleFavoriteClick}
                    sx={{
                        color: isFavorite ? red[500] : "inherit",
                    }}
                >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default NewsItem;
