export default {
  theme: {
    extend: {
      colors: {
        background: "#000000",
        text: "#FFFFFF",
        primary: "#00DB95",
        secondary: "#007650",
      },
      fontFamily: {
        sans: ["Staff", "sans-serif"],
        mono: ["t26-carbon", "monospace"],
        headline: ["Staff-X-Wide", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
};
