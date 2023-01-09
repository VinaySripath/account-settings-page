import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import SettingOptions from "../components/SettingOptions";

const AccountSettings = () => {
  return (
    <div>
      <Appbar />
      <div className="flex flex-col min-h-screen justify-between">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="w-full md:w-90 pl-6 pt-4 md:pl-0 md:pt-8 font-bold text-xl md:text-3xl">
            Account Settings
          </h1>
          <p className="w-full md:w-90 pl-6 pt-3 pb-6 md:pl-0 text-small md:text-base text-gray-600">
            Select an option below to change your account settings.
          </p>
          <SettingOptions text={"Verify Email"} />
          <SettingOptions text={"Link a Bank"} />
          <SettingOptions text={"Debit Card Details"} />
          <SettingOptions text={"Direct Deposit"} />
          <SettingOptions text={"Pay Distribution"} />
        </div>
        <div className="w-full flex justify-center pb-2 pt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
