/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lf-aqua': '#64EEBC',
        'lf-btn1': '#242424',
        'lf-btn2': 'rgba(36, 36, 36, 0.5)',
        'lf-brd': 'rgba(255, 255, 255, 0.5)',
        'lf-btn1-hover': '#3b3838',
        'lf-btn2-hover': 'rgba(36, 36, 36)',
      },
    },
  },
  plugins: [],
};
