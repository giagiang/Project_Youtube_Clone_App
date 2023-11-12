import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import  Videos from "./Videos";
import { Link, useParams } from "react-router-dom";
import CheckCircle from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics$id=${id}`).then((data) =>{
      console.log("video data:", data)
      setVideoDetail(data.items[0])
    }
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>{
      console.log("search data:", data)
      setVideos(data.items)
    }
  );
  }, [id]);

  if (!videoDetail?.snippet) return "loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle
                  sx={{ frontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction= "row" gap = "20px" alignContent="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignContent="center"
        >
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
