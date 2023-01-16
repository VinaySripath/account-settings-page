import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import { useLocation, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const step = location.state.type;
  // console.log(step);
  const clickHandler = (status: string, refresh?: boolean) => {
    navigate("/", { state: { status, step, refresh } });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <IconButton sx={{ pr: 2 }} onClick={() => clickHandler("completed")}>
          <Typography>Done</Typography>
          <DoneIcon />
        </IconButton>
        <IconButton sx={{ pr: 2 }} onClick={() => clickHandler("pending")}>
          <Typography>Pending</Typography>
          <PendingOutlinedIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton sx={{ pr: 2 }} onClick={() => clickHandler("active")}>
          <Typography>Failed</Typography>
          <CancelOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ pr: 2 }}
          onClick={() => {
            step === "email"
              ? clickHandler("active", true)
              : clickHandler("incomplete", true);
          }}
        >
          <Typography>refresh</Typography>
          <ReplayIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Settings;
