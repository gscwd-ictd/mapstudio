import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // app directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // components directory
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
