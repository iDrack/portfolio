/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    fontFamily: {
      sans: ['"inter"', "sans-serif"],
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
      shimmer: {
        from: { backgroundPosition: "200% 0" },
        to: { backgroundPosition: "-200% 0" },
      },
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
      shimmer: "shimmer 32s ease-in-out infinite",
      "infinite-scroll": "infinite-scroll 35s linear infinite",
    },
  },
  plugins: [require("flowbite/plugin")],
};
