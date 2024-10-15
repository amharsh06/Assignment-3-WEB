/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", 
    "./views/**/*.html", 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: ["dim"], 
    },
  },
  plugins: [
    require('daisyui'), 
    require('@tailwindcss/typography'), 
  ],
};
