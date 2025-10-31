/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#EB840F", // Naranja personalizado
        secondary: "#0E4576", // Azul personalizado
        celeste: "#00A8E8", // Celeste para estudiantes/carreras
        "background-light": "#f8fafc", // slate-50
        "background-dark": "#0f172a", // slate-900
        "card-light": "#ffffff",
        "card-dark": "#1e293b" // slate-800
      },
      fontFamily: {
        display: ["'Segoe UI'", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        sans: ["'Segoe UI'", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}
