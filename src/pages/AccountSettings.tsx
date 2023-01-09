import React from "react";
import { Box, Typography } from "@mui/material";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import SettingOptions from "../components/SettingOptions";

const AccountSettings = () => {
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
          <SettingOptions text={"Verify Email"} />
          <SettingOptions text={"Link a Bank"} />
          <SettingOptions text={"Debit Card Details"} />
          <SettingOptions text={"Direct Deposit"} />
          <SettingOptions text={"Pay Distribution"} />
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
