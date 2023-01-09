import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";

const SettingOptions = ({ text }) => {
  return (
    <div className="w-90 flex justify-between items-center py-1 pl-4 pr-2 md:p-6 bg-white rounded-md drop-shadow-md mt-2">
      <div className="w-fit flex justify-between items-center pb-1">
        <div className={`${"md:hidden"}`}>
          <CheckCircleIcon fontSize="small" style={{ fill: "#06c258" }} />
        </div>
        <div className={`${"mobile:hidden"}`}>
          <CheckCircleIcon fontSize="large" style={{ fill: "#06c258" }} />
        </div>
        <div className="pl-6 text-sm md:text-base">{text}</div>
      </div>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};

export default SettingOptions;
