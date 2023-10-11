import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/keep-react-demo/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("keep-react-demo/src/keep-preset.js")],
  theme: {},
  plugins: [],
};
export default config;
