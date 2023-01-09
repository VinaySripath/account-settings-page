/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "639px" },
      },
      fontSize: {
        small: "13px",
      },
      colors: {
        whitesmoke: "#F5F5F5",
      },
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
};
