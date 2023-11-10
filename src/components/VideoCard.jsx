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
  // demoProfilePicture,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log("props in videosCard", { videoId, snippet });
  return (
    <Card sx= {{width: {md: '300px', xs : '100%'}, boxShadow: 'none', borderRadius : 3}}>
      <Link to={videoId ? `./video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E" }} />
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold"  color="black">
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
        <Typography variant="subtitle2" fontWeight="bold" color="gray" height= '65px'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx = {{fontSize :12, color: 'gray', ml:'5px'}}></CheckCircle>
        </Typography>
      </Link>
    </Card>
  );
};

export default VideoCard;
