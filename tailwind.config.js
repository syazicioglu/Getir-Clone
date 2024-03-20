/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 6px 24px rgba(93, 62, 188, 0.04)",
        etbis: "0px 1px 6px rgba(105,116,136,0.15)",
      },
    },
  },
  plugins: [],
};
