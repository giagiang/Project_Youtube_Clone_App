import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright by Ronnie Ric G
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "red" }}>videos</span>
        </Typography>
        <Videos/>
      </Box>
    </Stack>
  );
};

export default Feed;
