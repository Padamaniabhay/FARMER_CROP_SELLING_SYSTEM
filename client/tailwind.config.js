module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crop:
        {
          50: '#fff9dc',
          100: '#ffecb0',
          200: '#fde081',
          300: '#fcd44f',
          400: '#fbc720',
          500: '#e2ae0a',
          600: '#b08703',
          700: '#7d6100',
          800: '#4c3a00',
          900: '#1c1300',
        }
      },
      transitionDuration: {
        '0': '0ms',
        '4000': '4000ms',
      }
    }
  },
  plugins: [],
}