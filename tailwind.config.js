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
        primaryColor:    'var(--primaryColor)',
        primaryAccent:   'var(--primaryAccent)',
        secondaryColor:  'var(--secondaryColor)',
        secondaryAccent: 'var(--secondaryAccent)',
        textColor:       'var(--textColor)',
        bgBody:          'var(--bgBody)',
      },
    },
  },
  plugins: [],
}