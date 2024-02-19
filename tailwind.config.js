/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#085467",
        secondary: "#AFA7BB",
        light: "#F4c0B3",
      },
    },
  },
  plugins: [],
};
