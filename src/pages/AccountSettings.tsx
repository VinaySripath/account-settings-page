import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import SettingOptions from "../components/SettingOptions";

const AccountSettings = () => {
  const emailState = JSON.parse(localStorage.getItem("emailState"));
  const linkBankState = JSON.parse(localStorage.getItem("linkBankState"));
  const cardDetailsState = JSON.parse(localStorage.getItem("cardDetailsState"));
  const depositState = JSON.parse(localStorage.getItem("depositState"));
  const payDistributionState = JSON.parse(
    localStorage.getItem("payDistributionState")
  );
  const [email, setEmail] = useState(emailState || "active");
  const [linkBank, setLinkBank] = useState(
    linkBankState ||
      (emailState === "completed" && linkBankState === "incomplete"
        ? "active"
        : "incomplete")
  );
  const [cardDetails, setCardDetails] = useState(
    cardDetailsState ||
      (linkBankState === "completed" && cardDetailsState === "incomplete"
        ? "active"
        : "incomplete")
  );
  const [deposit, setDeposit] = useState(
    depositState ||
      (cardDetailsState === "completed" && depositState === "incomplete"
        ? "active"
        : "incomplete")
  );
  const [payDistribution, setPayDistribution] = useState(
    payDistributionState ||
      (depositState === "completed" && payDistributionState === "incomplete"
        ? "active"
        : "incomplete")
  );
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
          <SettingOptions
            text={"Verify Email"}
            cardState={email}
            nextState={linkBank}
            setCardState={setEmail}
            setNextState={setLinkBank}
            type="email"
            nextType="linkBank"
            stateIndex={0}
            stateArray={[
              email,
              linkBank,
              cardDetails,
              deposit,
              payDistribution,
            ]}
            setStateArray={[
              setEmail,
              setLinkBank,
              setCardDetails,
              setDeposit,
              setPayDistribution,
            ]}
            stateNameArray={[
              "email",
              "linkBank",
              "cardDetails",
              "deposit",
              "payDistribution",
            ]}
          />
          <SettingOptions
            text={"Link a Bank"}
            cardState={linkBank}
            nextState={cardDetails}
            setCardState={setLinkBank}
            setNextState={setCardDetails}
            type="linkBank"
            nextType="cardDetails"
            stateIndex={1}
            stateArray={[
              email,
              linkBank,
              cardDetails,
              deposit,
              payDistribution,
            ]}
            setStateArray={[
              setEmail,
              setLinkBank,
              setCardDetails,
              setDeposit,
              setPayDistribution,
            ]}
            stateNameArray={[
              "email",
              "linkBank",
              "cardDetails",
              "deposit",
              "payDistribution",
            ]}
          />
          <SettingOptions
            text={"Debit Card Details"}
            cardState={cardDetails}
            nextState={deposit}
            setCardState={setCardDetails}
            setNextState={setDeposit}
            type="cardDetails"
            nextType="deposit"
            stateIndex={2}
            stateArray={[
              email,
              linkBank,
              cardDetails,
              deposit,
              payDistribution,
            ]}
            setStateArray={[
              setEmail,
              setLinkBank,
              setCardDetails,
              setDeposit,
              setPayDistribution,
            ]}
            stateNameArray={[
              "email",
              "linkBank",
              "cardDetails",
              "deposit",
              "payDistribution",
            ]}
          />
          <SettingOptions
            text={"Direct Deposit"}
            cardState={deposit}
            nextState={payDistribution}
            setCardState={setDeposit}
            setNextState={setPayDistribution}
            type="deposit"
            nextType="payDistribution"
            stateIndex={3}
            stateArray={[
              email,
              linkBank,
              cardDetails,
              deposit,
              payDistribution,
            ]}
            setStateArray={[
              setEmail,
              setLinkBank,
              setCardDetails,
              setDeposit,
              setPayDistribution,
            ]}
            stateNameArray={[
              "email",
              "linkBank",
              "cardDetails",
              "deposit",
              "payDistribution",
            ]}
          />
          <SettingOptions
            text={"Pay Distribution"}
            cardState={payDistribution}
            setCardState={setPayDistribution}
            type="payDistribution"
            stateIndex={4}
            stateArray={[
              email,
              linkBank,
              cardDetails,
              deposit,
              payDistribution,
            ]}
            setStateArray={[
              setEmail,
              setLinkBank,
              setCardDetails,
              setDeposit,
              setPayDistribution,
            ]}
            stateNameArray={[
              "email",
              "linkBank",
              "cardDetails",
              "deposit",
              "payDistribution",
            ]}
          />
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
