import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton, Paper } from "@mui/material";

const SettingOptions = ({ text }) => {
  return (
    <Paper
      sx={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        pl: 1,
        mb: 1.5,
        py: 0.5,
        borderRadius: 2,
        boxShadow: "2px 2px 5px rgb(0 0 0 / 10%)",
      }}
    >
      <div className="w-fit flex justify-between items-center pb-1">
        <div>
          <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />
        </div>
        <div className="pl-6 text-sm font-semibold">{text}</div>
      </div>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
};

export default SettingOptions;
