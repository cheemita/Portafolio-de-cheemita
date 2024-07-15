/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        primary: "#52525A",
        secondary: "#FDFDFD",
        tertiary: "#232323",
        primaryHover: "#919196",
        secondaryHover: "#E5E5E5",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
