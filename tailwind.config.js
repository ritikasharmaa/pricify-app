/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h2: "2rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1.125rem",
        main: "1.6875rem",
        xxs: "0.625rem",
      },
      lineHeight: {
        h2: "2rem",
        h3: "1.25rem",
        h4: "1.5rem",
        h5: "1.25rem",
        main: "1.875rem",
      },
      padding: {
        4.5: "1.125rem",
      },
      colors: {
        warmGray: {
          200: "#E7E5E4",
          300: "#D6D3D1",
          600: "#57534E",
          900: "#1C1917",
        },
        gray: {
          750: "#2F2F2F",
        },
        blue: {
          1000: "#0038FF",
        },
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
