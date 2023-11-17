/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans:          'var(--fontPrimary)',
      mono:          'var(--fontSecondary)',
    },
    extend: {
      colors: {
        primaryColor:   'var(--primaryColor)',
        secondaryColor: 'var(--secondaryColor)',
        bgBody:         'var(--bgBody)',
      },
    },
  },
  plugins: [],
}

