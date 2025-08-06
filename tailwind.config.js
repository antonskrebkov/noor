/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-green": "#1b281d",
        "header-text": "#fdfcfb",
        "timer-bg": "#fffc",
        "hero-beige": "#f8ede5",
        "hero-green": "#525a31",
      },
      screens: {
        mobile: "481px",
        tablet: "1051px",
      },
      fontFamily: {
        gotham: ['"Gotham"', "sans-serif"],
        "roboto-regular": ['"Roboto-Regular"', "sans-serif"],
        "roboto-bold": ['"Roboto-Bold"', "sans-serif"],
        "roboto-black": ['"Roboto-Black"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
