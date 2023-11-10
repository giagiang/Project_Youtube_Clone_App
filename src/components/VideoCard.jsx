import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log("props in videosCard", { videoId, snippet });
  return (
    <Card sx= {{width: {md: '320px', xs : '100%'}, boxShadow: 'none', borderRadius : 0}}>
      <Link to={videoId ? `./video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.hight?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: "180px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }} />
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="black">
          {" "}
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId
            ? `channel/${snippet?.demoChannelId}`
            : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {" "}
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx = {{fontSize :12, color: 'blue', ml:'5px'}}></CheckCircle>
        </Typography>
      </Link>
    </Card>
  );
};

export default VideoCard;
