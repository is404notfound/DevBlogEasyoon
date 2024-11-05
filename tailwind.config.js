// @ts-check
const designSystemTokens = require('./styles/designSystemTokens');


/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  // darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      ...designSystemTokens,
    },
  },
  plugins: [
    require('@tailwindcss/forms')
    , require('@tailwindcss/typography')
  ]
}
