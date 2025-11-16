module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // orange-500
        "background-light": "#f8fafc", // slate-50
        "background-dark": "#0f172a", // slate-900
        "card-light": "#ffffff",
        "card-dark": "#1e293b" // slate-800
      },
      fontFamily: {
        display: ["'Inter', sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}