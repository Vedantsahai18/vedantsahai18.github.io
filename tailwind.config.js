/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0078ff',
        secondary: '#34d399',
        tertiary: '#7c3aed',
        'ml-accent': '#00a3e0',
        dark: '#111827',
        light: '#f9fafb',
        'gray-light': '#f3f4f6',
        'gray-medium': '#9ca3af',
        'gray-dark': '#4b5563',
        'overlay-dark': 'rgba(17,24,39,0.8)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'shimmer': 'shimmer 1.5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(500%)' }
        }
      }
    },
  },
  plugins: [],
}
