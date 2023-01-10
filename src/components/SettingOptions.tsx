import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const SettingOptions = ({
  text,
  cardState,
  nextState,
  setCardState,
  setNextState,
  type,
}: {
  text: string;
  cardState: string;
  nextState?: string;
  setCardState: any;
  setNextState?: any;
  type: string;
}) => {
  const location = useLocation();
  const status = location.state?.status;
  const step = location.state?.step;
  const navigate = useNavigate();
  const settingHandler = () => {
    if (cardState !== "incomplete") {
      navigate("/settings", { state: { type } });
    }
  };

  useEffect(() => {
    if (step === type) {
      setCardState(status);
      if (
        (status === "completed" || status === "pending") &&
        nextState === "incomplete"
      ) {
        setNextState && setNextState("active");
      }
      localStorage.setItem(`${type}State`, JSON.stringify(status));
    }
    // eslint-disable-next-line
  }, [status, step]);

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
          {cardState === "completed" && (
            <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />
          )}
          {(cardState === "active" || cardState === "incomplete") && (
            <CheckCircleOutlineIcon
              fontSize="small"
              style={{ fill: "#90909090" }}
            />
          )}
          {cardState === "pending" && (
            <ErrorIcon fontSize="small" style={{ fill: "#e4cd05" }} />
          )}

          <Typography sx={{ fontSize: 14, fontWeight: 600, pl: 3 }}>
            {text}
          </Typography>
        </Box>
        {cardState === "active" && (
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

export default SettingOptions;
