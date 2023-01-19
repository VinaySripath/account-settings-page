import React from "react";
import { Box, Typography } from "@mui/material";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import StepCard from "../components/StepCard";
const stepsArray = ["email", "bank", "card", "deposit", "payDistribution"];
function getStepToBeCompleted() {
  const e = JSON.parse(localStorage.getItem("email"));
  const b = JSON.parse(localStorage.getItem("bank"));
  const c = JSON.parse(localStorage.getItem("card"));
  const d = JSON.parse(localStorage.getItem("deposit"));
  const pd = JSON.parse(localStorage.getItem("payDistribution"));
  const step1 = !e?.status || e?.status === "incomplete";
  const step2 = !step1 && (!b?.status || b?.status === "incomplete");
  const step3 = !step2 && !step1 && (!c?.status || c?.status === "incomplete");
  const step4 =
    !step3 && !step2 && !step1 && (!d?.status || d?.status === "incomplete");
  const step5 =
    !step4 &&
    !step3 &&
    !step2 &&
    !step1 &&
    (!pd?.status || pd?.status === "incomplete");
  return [step1, step2, step3, step4, step5];
}
const AccountSettings = () => {
  const stepsToBeCompletedArr = getStepToBeCompleted();
  return (
    <Box>
      <Appbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              width: "90%",
              pt: 2,
              fontWeight: "bold",
            }}
          >
            Account Settings
          </Typography>
          <Typography
            sx={{ width: "90%", pt: 1, pb: 3, fontSize: 13, color: "gray" }}
          >
            Select an option below to change your account settings.
          </Typography>
          {stepsArray.map((item, idx) => (
            <StepCard
              key={item + idx}
              stepName={item}
              toBeCompletedNext={stepsToBeCompletedArr[idx]}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pb: 2,
            pt: 16,
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
export default AccountSettings;
