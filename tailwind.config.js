/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#312651", // основной оттенок
          dark: "#444262",
          light: "#83829A",
        },
        accent: "#FF7754", // акцентный цвет
        neutral: "#E6E4E6", // нейтральный цвет
      },
    },
  },
  plugins: [],
};
