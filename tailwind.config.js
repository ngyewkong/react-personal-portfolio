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
      lightprimary: "#EAE7DC",
      darkprimary: "#0B0C10",
      lightsecondary: "#E85A4F",
      darksecondary: "#66FCF1",
      lightinline: "#8E8D8A",
      darkinline: "#C5C6C7",
      lightinteractive: "#E98074",
      darkinteractive: "#45A29E",
      lightprimarysubtle: "#F6F5F1",
      darkprimarysubtle: "#1F2833",
    },
  },
  plugins: [],
};
