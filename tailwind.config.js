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
    },
  },
  plugins: [],
}

