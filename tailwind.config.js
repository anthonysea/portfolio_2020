module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['"Fira Sans"', '"Segoue UI"', "sans-serif"],
      body: ['"Fira Sans"', '"Segoe UI"', "sans-serif"],
    },
  },
};
