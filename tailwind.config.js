module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: {
        100: "#fff",
        200: "#f9f7ec",
        300: "#F4F1DE",
        400: "#f2efd9",
        500: "#ece7c6"
      },
      secondary: {
        100: "#E07A5F",
        200: "#de7254",
        300: "#da603e",
        400: "#d64e29",
        500: "#c14725"
      },
      tertiary: {
        100: "#52567a",
        200: "#474b6b",
        300: "#3D405B",
        400: "#33364d",
        500: "#292b3d"
      },
      quaternary: {
        100: "#81B29A",
        200: "#71a88d",
        300: "#619e81",
        400: "#578e74",
        500: "#4e7e67"
      },
      quinary: {
        100: "#F2CC8F",
        200: "#efc176",
        300: "#ecb65f",
        400: "#eaac48",
        500: "#e7a132"
      },
      error: "#d32752",
      info: "#f6c31c",
      highlight: "#66a3ff"
    },
    extend: {}
  },
  plugins: []
};
