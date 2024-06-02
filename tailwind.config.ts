import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      // Background colors
      'dark-primary-background': '#1E1E1E',
      'dark-secondary-background':'#383838',
      'selection-background': '#264F78',

      // Text colors
      'primary-text': '#D4D4D4',
      'comment-text': '#6A9955',
      'string-text': '#CE9178',

      // Border colors
      'bor-color': '#D4D4D4',

      // Additional colors
      'number-color': '#B5CEA8',
      'function-name-color': '#DCDCAA',
      'operator-color': '#D4D4D4',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
