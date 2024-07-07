import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        price: ['Helvetica', 'Helvetica Neue', 'Arial', 'Lucida Grande', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.1rem',
      },
    },
    fontFamily: {
      nexa: ['Nexa', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;