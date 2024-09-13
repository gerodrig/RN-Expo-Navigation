/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Gold
        secondary: {
          DEFAULT: '#B40086', // A shade of magenta
          100: '#F8BBD0', // Light pink
          200: '#F48FB1', // Pink
          300: '#F06292', // Medium pink
          400: '#EC407A', // Dark pink
          500: '#E91E63', // Deep pink
          600: '#D81B60', // Darker pink
          700: '#C2185B', // Even darker pink
          800: '#AD1457', // Very dark pink
        },
        tertiary: {
          DEFAULT: '#4CAF50', // Green
          100: '#E8F5E9', // Light green
          200: '#C8E6C9', // Green
          300: '#A5D6A7', // Medium green
          400: '#81C784', // Dark green
          500: '#66BB6A', // Deep green
          600: '#4CAF50', // Darker green
          700: '#43A047', // Even darker green
          800: '#388E3C', // Very dark green
        },
      },
      fontFamily: {
        'hack-bold': ['HackNerdFontMono-Bold', 'monospace'],
        'hack-regular': ['HackNerdFontMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}
