/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FF83E4',
        'green': '#89F7AA',
        'purple': '#4B1E83',
        'light-pink': '#FFBEF1'
        
      },
      animation: {
        'gradient-y': 'gradient-y 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {  
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      gochi: ['Gochi Hand', 'cursive'],
      mohave: ['Mohave', 'sans-serif'],
      museo: ['MuseoModerno', 'cursive'],
      

    },
  },
  plugins: [],
};



