module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ADB5',
          black: '#222831',
          gray: '#393E46',
          white: '#EEEEEE',
        },
      },
    },
  },
  plugins: [],
}
