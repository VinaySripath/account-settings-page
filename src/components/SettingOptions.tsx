import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Paper, Typography } from "@mui/material";

const SettingOptions = ({ text }: { text: string }) => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />

        <Typography sx={{ fontSize: 14, fontWeight: 600, pl: 3 }}>
          {text}
        </Typography>
      </Box>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
};

export default SettingOptions;
