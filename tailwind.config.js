/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gridTemplateColumns: {
      4: "repeat(4, minmax(0, 145px))",
    },
    extend: {
      colors: {
        text: "#171717",
        accent: "#DA0037",
        accent2: "#444444",
        bg: "#EDEDED",
      },
    },
  },
  plugins: [],
};
