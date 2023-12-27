/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        boxes: "#F7F7FF",
        darkBoxes: "rgb(3 7 18 / 1)",
        buttons: "#AFBCFE",
        darkButtons: "#0FA976",
        icons: "#EBEBFF",
        darkIcons: "#07112C",
        background: "#FFF8F0",
      },
      backgroundImage: {
        violet:
          "radial-gradient(circle, rgba(13,6,73,1) 0%, rgba(85,42,214,1) 100%)",
      },
    },
  },
  plugins: [],
};
