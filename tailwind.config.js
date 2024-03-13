/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "twitch-purple": "#9146FF",
        "twitch-pink": "#FF2D55",
        "twitch-blue": "#1F95FF",
        "twitch-green": "#5DBE62",
        "twitch-purple-light": "#A970FF",
        "twitch-purple-dark": "#4F1E99",
        "twitch-dark": "#18181B",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      animation: {
        "shadow-spin": " spin 2s infinite",
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(-1deg)",
          },
          "25%": {
            transform: "rotate(0deg)",
          },
          "50%":{
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [],
}

