import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#151A19',
        paper: '#F5F6F4',
        mist: '#E8ECE9',
        muted: '#68716F',
        teal: '#2C6561',
        navy: {
          900: '#151B1A',
          800: '#1D2624',
          700: '#2B3734',
          600: '#3B4946',
        },
        gold: {
          300: '#FFE066',
          400: '#FFD333',
          500: '#FCC900',
          600: '#E5B400',
        },
        'text-secondary': '#AEB8B5',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Noto Sans KR', 'Malgun Gothic', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': '#EEF1EF',
        'card-gradient': '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
