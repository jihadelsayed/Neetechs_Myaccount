/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  darkMode: "",// class  --  media
  theme: {
      extend: {
        colors: {
          gray: {
            50: '#F0F0E9',
            100: '#C8C8C2',
            200: '#A1A19C',
            300: '#7C7C78',
            400: '#595956',
            500: '#383836',
            600: '#1A1A18',
            700: '#1A1A18',
            800: '#030201',
            900: '#030201',
          },
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
          inter: ["Inter", "sans-serif"],
        },

      },
  },
  plugins: [],
}
