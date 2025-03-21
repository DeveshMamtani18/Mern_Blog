/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js" // Ensure Flowbite is scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Enable Flowbite
  ],
};
