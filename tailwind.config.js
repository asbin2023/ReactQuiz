/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#9d5af5",
        skyblue: "#6cb7f5",
        lilac: "#c1b2dd",
        dark: "#1d0433",
      },
    },
  },
  plugins: [],
};
