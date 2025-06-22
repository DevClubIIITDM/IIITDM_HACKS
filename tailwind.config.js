/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
      },
      colors: {
        'gray': {
          900: '#111827',
        },
        'cyan': {
          400: '#22d3ee',
          100: '#cffafe',
        },
        'purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        'pink': {
          400: '#f472b6',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee' },
          '100%': { boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee' },
        },
      },
    },
  },
  plugins: [],
} 