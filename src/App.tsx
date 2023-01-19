import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AccountSettings from "./pages/AccountSettings";
import Settings from "./pages/Settings";

function App() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      <Routes>
        {/* <Route path={"/"} element={<AccountSettings />} />
        <Route path={"/settings"} element={<Settings />} /> */}
        <Route path={"/"} element={<AccountSettings />} />
        <Route path={"/settings"} element={<Settings />} />
      </Routes>
    </Box>
  );
}

export default App;
