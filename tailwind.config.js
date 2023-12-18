/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-img': "url('/public/images/home.jpg')",
        'home1-img': "url('/public/images/image5.jpg')",
        'vision-img': "url('/public/images/vision.jpg')"
      }
    },
  },
  plugins: [],
}

