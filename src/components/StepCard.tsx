import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
type Props = { stepName: string; toBeCompletedNext: boolean };
const StepCard = ({ stepName, toBeCompletedNext }: Props) => {
  const state = JSON.parse(localStorage.getItem(stepName));
  const status = state?.status || "incomplete";
  const completedOnce = state?.completedOnce || false;
  const navigate = useNavigate();
  const settingHandler = () => {
    if (completedOnce || toBeCompletedNext) {
      navigate("/settings?step=" + stepName);
    }
  };
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {status === "completed" && (
            <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />
          )}
          {status === "incomplete" && (
            <CheckCircleOutlineIcon
              fontSize="small"
              style={{ fill: "#90909090" }}
            />
          )}
          {status === "pending" && (
            <ErrorIcon fontSize="small" style={{ fill: "#e4cd05" }} />
          )}
          ​
          <Typography sx={{ fontSize: 14, fontWeight: 600, pl: 3 }}>
            {stepName}
          </Typography>
        </Box>
        {toBeCompletedNext && (
          <Typography
            sx={{
              fontSize: 10,
              wordWrap: "break-word",
              width: "250px",
              pl: 5.5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
            ullam velit blanditiis maxime exercitationem ab voluptatem.
          </Typography>
        )}
      </Box>
      <IconButton onClick={settingHandler}>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
};
export default StepCard;
