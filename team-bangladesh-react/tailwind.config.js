/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: '#2e7d32',
        'leaf-light': '#4caf50',
        'amber-glow': '#ffd54f',
        ink: '#1a1a2e',
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#6b7280',
        },
        card: '#ffffff',
        border: '#e5e7eb',
        foreground: '#111827',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        script: ['"Rock Salt"', 'cursive'],
      },
    },
  },
  plugins: [],
}
