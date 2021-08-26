module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      zIndex: {
        'n1': "-1",
      },
      transformOrigin: {
        0: "0%",
      },
      colors: {
        phage: {
          light: "#F9FAFA",
          dark: "#222a33",
          purple: "#8662ea",
          green: "#27b29b",
          red: "#ea626b",
          blue: "#629fea",
          gradient: "bg-gradient-to-r from-green-400 to-blue-500",
        },
      },
      fontFamily: {
        body: ["Orkney"],
        header: ["Montserrat"],
      },
    },
  },
  variants: {

    extend: {},
  },
  plugins: [],
};
