import React from "react";
import appstore from "../images/app_store.png";
import playstore from "../images/play_store.png";
import aicpa from "../images/aicpa_soc.png";
import visa from "../images/visa_logo.png";

const Footer = () => {
  return (
    <div className="w-90">
      <div className="font-semibold text-sm">Download the App</div>
      <div className="flex justify-between border-b-2 pb-4">
        <div className="w-fit flex justify-between items-center">
          <img src={appstore} alt="app store" className="w-16 h-6" />
          <img src={playstore} alt="play store" className="w-16 h-8" />
        </div>
        <div className="w-20 flex justify-between items-center">
          <img src={aicpa} alt="aicpa soc" className="w-6 h-6" />
          <img src={visa} alt="visa logo" className="w-12 h-4" />
        </div>
      </div>
      <div className="text-center text-small pt-2 font-semibold">
        We are here to help
      </div>
      <div className="text-center text-xs pb-6 border-b-4 ">
        Looking for additional support? You can reach out to Grit Customer
        Support at support@gritfinancial.com
      </div>
    </div>
  );
};

export default Footer;
