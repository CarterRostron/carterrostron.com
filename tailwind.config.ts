import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Boho color palette
        earth: {
          50: '#f5f3ed',
          100: '#e8e4d5',
          200: '#d4cbae',
          300: '#bfad83',
          400: '#ac9262',
          500: '#9d8254',
          600: '#886d48',
          700: '#6f573d',
          800: '#5e4a37',
          900: '#523f32',
        },
        sage: {
          50: '#f3f6f3',
          100: '#e3ebe3',
          200: '#c7d7c8',
          300: '#a1bda4',
          400: '#769c7a',
          500: '#57805c',
          600: '#426547',
          700: '#36503a',
          800: '#2d4030',
          900: '#263529',
        },
        gold: {
          50: '#fdf9ed',
          100: '#f9efc6',
          200: '#f4dd8e',
          300: '#f0c955',
          400: '#ecb72f',
          500: '#dc9a1a',
          600: '#c07614',
          700: '#9c5414',
          800: '#814217',
          900: '#6e3618',
        },
        cream: {
          50: '#fdfdfb',
          100: '#faf8f2',
          200: '#f5f1e5',
          300: '#ede6d1',
          400: '#e3d7b6',
          500: '#d4c49a',
          600: '#c1ab7d',
          700: '#a68e63',
          800: '#897553',
          900: '#716146',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic': '63% 37% 54% 46% / 55% 48% 52% 45%',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'lifted': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'glow-green': '0 0 20px rgba(87, 128, 92, 0.3)',
        'glow-gold': '0 0 20px rgba(220, 154, 26, 0.3)',
      },
      animation: {
        'wave': 'wave 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
