/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        first: "#312651",
        second: "#444262",
        light: "#83829A",
        accent: "#FF7754",
        accent2: "#312651",
        neutral: "#E6E4E6",
      },
    },
  },
  plugins: [],
};
