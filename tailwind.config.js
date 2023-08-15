/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 1.5s linear infinite",
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translate(-50%, 0)" },
          "50%": { transform: "translate(-50%, -8px)" },
        },
      },
    },
  },
  plugins: [],
};
