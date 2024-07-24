/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    fontFamily: {
      sans: ['"inter"', 'sans-serif']
    },
    extend: {},
    container: {
      center: true,
    },
    keyframes: {
      "text-shimmer": {
        from: { backgroundPosition: "0 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
    animation: {
      "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
    },
  },
  plugins: [],
}