import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      data-testid="videos-container"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          data-testid="video-card"
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {/* {console.log("channel Id :", item.id.channelId)} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
