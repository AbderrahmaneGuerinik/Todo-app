/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        d: "20px 70px 30px rgba(0, 0, 0, 0.50)",
        w: "20px 70px 30px rgba(194, 195, 214, 0.50)",
      },
    },
  },
  plugins: [],
};
