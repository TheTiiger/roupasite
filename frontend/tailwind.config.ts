import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        price: ['Helvetica', 'Helvetica Neue', 'Arial', 'Lucida Grande', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.1rem',
      },
      boxShadow: {
        'top-light': '0 -2px 4px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '100': '25rem',
      },
    },
  },
  plugins: [],
};

export default config;