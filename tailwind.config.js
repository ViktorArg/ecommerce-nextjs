/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-neutral': '#fafafa',
        'secundary-neutral': '#737373',
        'terceary-neutral': '#0a0a0a',
        'primary-orange': '#FF5722',
        'primary-rose': '#9f1239',
        'primary-teal': '#2dd4bf',
        'secundary-teal': '#115e59',
        'terceary-teal': '#042f2e',
        'sky-primary': '#38bdf8',
        'sky-secundary': '#0284c7',
        'sky-terceary': '#0c4a6e',
      }
    },
  },
  plugins: [],
}
