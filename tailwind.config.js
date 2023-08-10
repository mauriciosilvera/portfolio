/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        boxes: 'rgb(3 7 18 / 1)',
        turquoise: 'rgb(16 185 129 / 1)',
      },
      backgroundImage: {
        violet: 'radial-gradient(circle, rgba(13,6,73,1) 0%, rgba(85,42,214,1) 100%)',
      },
    },
  },
  plugins: [],
};
