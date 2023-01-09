import React from "react";
import appstore from "../images/app_store.png";
import playstore from "../images/play_store.png";
import aicpa from "../images/aicpa_soc.png";
import visa from "../images/visa_logo.png";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
        Download the App
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pb: 2,
          borderBottom: "1px solid #80808070",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={appstore} alt="app store" className="w-16 h-6" />
          <img src={playstore} alt="play store" className="w-16 h-8" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={aicpa} alt="aicpa soc" className="w-6 h-6" />
          <img src={visa} alt="visa logo" className="w-12 h-4" />
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: 12,
          py: 1,
          fontWeight: "bold",
          textAlign: "center",
          color: "#505050",
        }}
      >
        We are here to help
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          textAlign: "center",
          pb: 2,
        }}
      >
        Looking for additional support? You can reach out to Grit Customer
        Support at support@gritfinancial.com
      </Typography>
      <Box
        sx={{
          width: "35%",
          height: 4,
          backgroundColor: "black",
          alignSelf: "center",
          borderRadius: "2px",
        }}
      ></Box>
    </Box>
  );
};

export default Footer;
