// tailwind.config.js
module.exports = {
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightprimary: "#FCF8E8",
      darkprimary: "#2C3639",
      lightsecondary: "#153462",
      darksecondary: "#F7AB0A",
      lightinline: "#000000",
      darkinline: "#DCD7C9",
      lightinteractive: "#ECB390",
      darkinteractive: "#A27B5C",
    },
  },
  plugins: [],
};
