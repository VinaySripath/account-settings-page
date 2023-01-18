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
  nextType,
  stateIndex,
  stateArray,
  setStateArray,
  stateNameArray,
}: {
  text: string;
  cardState: {
    state: any;
    completedOnce: boolean;
    stepToBeCompleted: boolean;
  };
  nextState?: {
    state: any;
    completedOnce: boolean;
    stepToBeCompleted: boolean;
  };
  setCardState: any;
  setNextState?: any;
  type: string;
  nextType?: string;
  stateIndex?: number;
  stateArray?: {
    state: any;
    completedOnce: boolean;
    stepToBeCompleted: boolean;
  }[];
  setStateArray?: any[];
  stateNameArray?: string[];
}) => {
  const location = useLocation();
  const status = location.state?.status;
  const refresh = location.state?.refresh;
  const step = location.state?.step;
  const navigate = useNavigate();
  const settingHandler = () => {
    if (
      cardState.completedOnce ||
      cardState.state === "completed" ||
      (cardState.state === "incomplete" && cardState.stepToBeCompleted)
    ) {
      navigate("/settings", { state: { type } });
    }
  };

  useEffect(() => {
    if (step === type) {
      setCardState(status);
      let checkNextIncomplete = true;
      for (let i = 0; i < stateIndex; i++) {
        if (stateArray[i].stepToBeCompleted) {
          checkNextIncomplete = false;
          break;
        }
      }
      if (
        checkNextIncomplete &&
        (status === "completed" || status === "pending")
      ) {
        for (let i = stateIndex + 1; i < stateArray.length; i++) {
          if (stateArray[i].stepToBeCompleted) {
            break;
          }
          if (stateArray[i].state) {
            setStateArray[i]({
              state: "incomplete",
              completedOnce: false,
              stepToBeCompleted: true,
            });
            localStorage.setItem(
              `${stateNameArray[i]}State`,
              JSON.stringify({
                state: "incomplete",
                completedOnce: false,
                stepToBeCompleted: true,
              })
            );
            break;
          }
        }
      }
      if (status === "incomplete") {
        for (let i = 0; i < stateIndex; i++) {
          if (stateArray[i].stepToBeCompleted) {
            setStateArray[stateIndex]({
              state: "incomplete",
              completedOnce: false,
              stepToBeCompleted: false,
            });
            localStorage.setItem(
              `${stateNameArray[stateIndex]}State`,
              JSON.stringify({
                state: "incomplete",
                completedOnce: false,
                stepToBeCompleted: false,
              })
            );
            break;
          } else if (stateArray[i].stepToBeCompleted && i === stateIndex - 1) {
            setStateArray[stateIndex]({
              state: stateArray[i].state,
              completedOnce: false,
              stepToBeCompleted: true,
            });
            localStorage.setItem(
              `${stateNameArray[stateIndex]}State`,
              JSON.stringify({
                state: stateArray[i].state,
                completedOnce: false,
                stepToBeCompleted: true,
              })
            );
          }
        }
        if (status === "incomplete" && stateIndex === 0) {
          setCardState(cardState);
          localStorage.setItem(
            `${stateNameArray[stateIndex]}State`,
            JSON.stringify(cardState)
          );
        }
        for (let i = stateIndex + 1; i < stateArray.length; i++) {
          if (stateArray[i].stepToBeCompleted) {
            setStateArray[i]({
              state: "incomplete",
              completedOnce: false,
              stepToBeCompleted: false,
            });
            localStorage.setItem(
              `${stateNameArray[i]}State`,
              JSON.stringify({
                state: "incomplete",
                completedOnce: false,
                stepToBeCompleted: false,
              })
            );
            break;
          }
        }
      }
      if (
        (status === "completed" || status === "pending") &&
        nextState.state === "incomplete"
      ) {
        setNextState &&
          setNextState({
            state: "incomplete",
            completedOnce: false,
            stepToBeCompleted: true,
          });
        localStorage.setItem(
          `${nextType}State`,
          JSON.stringify({
            state: "incomplete",
            completedOnce: false,
            stepToBeCompleted: true,
          })
        );
      } else if (status === "active" && nextState.stepToBeCompleted === true) {
        setNextState &&
          setNextState({
            state: "incomplete",
            completedOnce: false,
            stepToBeCompleted: false,
          });
        localStorage.setItem(
          `${nextType}State`,
          JSON.stringify({
            state: "incomplete",
            completedOnce: false,
            stepToBeCompleted: false,
          })
        );
      }
      if (status === "completed" || status === "pending" || refresh) {
        setCardState({
          state: "completed",
          completedOnce: true,
          stepToBeCompleted: false,
        });
        localStorage.setItem(
          `${type}State`,
          JSON.stringify({
            state: status,
            completedOnce: true,
            stepToBeCompleted: false,
          })
        );
      }
    }
    // eslint-disable-next-line
  }, [status, step]);
  console.log(cardState.state);

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
          {cardState.state === "completed" && (
            <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />
          )}
          {(cardState.stepToBeCompleted ||
            cardState.state === "incomplete") && (
            <CheckCircleOutlineIcon
              fontSize="small"
              style={{ fill: "#90909090" }}
            />
          )}
          {cardState.state === "pending" && (
            <ErrorIcon fontSize="small" style={{ fill: "#e4cd05" }} />
          )}

          <Typography sx={{ fontSize: 14, fontWeight: 600, pl: 3 }}>
            {text}
          </Typography>
        </Box>
        {cardState.stepToBeCompleted && (
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

const abc = {
  completedOnce: true,
  state: "complete || incomplete || pending",
  stepToBeCompleted: true,
};
