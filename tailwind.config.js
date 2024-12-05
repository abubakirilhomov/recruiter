/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#312651", 
          dark: "#444262",
          light: "#83829A",
        },
        accent: "#FF7754",
        neutral: "#E6E4E6",
      },
    },
  },
  plugins: [],
};
