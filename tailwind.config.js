/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a5c0ff',
          400: '#8097ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        accent: {
          50: '#f0fdff',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'rainbow-flow': 'rainbow-flow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'sparkle': 'sparkle 3s linear infinite',
        'confetti-fall': 'confetti-fall 5s linear forwards',
        'demo-glow': 'demo-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'rainbow-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(30px) rotate(240deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(102, 126, 234, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(240, 147, 251, 0.6)' },
        },
        'shimmer': {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'sparkle': {
          '0%': { opacity: '0', transform: 'translateY(100vh) scale(0)' },
          '10%': { opacity: '1', transform: 'translateY(90vh) scale(1)' },
          '90%': { opacity: '1', transform: 'translateY(10vh) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(0) scale(0)' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        'demo-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(102, 126, 234, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(240, 147, 251, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-rainbow': 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff1493, #00bfff)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(26, 32, 44, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%)',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
