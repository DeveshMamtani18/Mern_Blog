const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js" // Ensure Flowbite is scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
     // Enable Flowbite
  ],
};
