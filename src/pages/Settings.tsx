import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import { useNavigate, useSearchParams } from "react-router-dom";
const Settings = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const step = search.get("step");
  const clickHandler = (status: string) => {
    let state = {};
    switch (status) {
      case "completed":
        state = { status, completedOnce: true };
        break;
      case "pending":
        state = { status, completedOnce: true };
        break;
      case "incomplete":
        state = { status, completedOnce: true };
        break;
      default:
        break;
    }
    localStorage.setItem(step, JSON.stringify(state));
    navigate("/");
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
        <IconButton sx={{ pr: 2 }} onClick={() => clickHandler("incomplete")}>
          <Typography>Incomplete</Typography>
          <CancelOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ pr: 2 }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          <Typography>Reset</Typography>
          <ReplayIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Settings;
