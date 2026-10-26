/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173D2A',
          deep: '#0F291C',
          light: '#23533B',
          dark: '#0A1C13'
        },
        leaf: {
          DEFAULT: '#4F8A45',
          light: '#65A859',
          dark: '#3B6B33',
          hover: '#43773A'
        },
        sage: {
          DEFAULT: '#DCE8D5',
          light: '#F0F5EC',
          dark: '#B8CEAC',
          border: '#C8DAC0'
        },
        cream: {
          DEFAULT: '#FAF8F0',
          soft: '#F4F0E4',
          dark: '#EBE4D0',
          pure: '#FCFBF7'
        },
        earth: {
          DEFAULT: '#8D6E63',
          gold: '#C59A45',
          amber: '#DDA15E',
          bronze: '#704214'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', '"Mukta Malar"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 61, 42, 0.06), 0 2px 6px -1px rgba(23, 61, 42, 0.04)',
        'card': '0 10px 30px -4px rgba(23, 61, 42, 0.08), 0 4px 12px -2px rgba(23, 61, 42, 0.04)',
        'hover': '0 20px 40px -8px rgba(23, 61, 42, 0.14), 0 8px 16px -4px rgba(23, 61, 42, 0.06)',
        'glow': '0 0 25px rgba(79, 138, 69, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-4deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
