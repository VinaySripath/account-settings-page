import React from "react";
import { Box, IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const step = location.state.type;
  const clickHandler = (status: string) => {
    navigate("/", { state: { status, step } });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => clickHandler("completed")}>
        <DoneIcon />
      </IconButton>
      <IconButton onClick={() => clickHandler("pending")}>
        <PendingOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => clickHandler("incomplete")}>
        <CancelOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Settings;
