/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7A5CFA",
        grey: "#E1E1E1",
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1300px",
    },
  },
  plugins: [],
};
