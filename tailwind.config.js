/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds
        'surface': '#FAFBFC',
        'surface-secondary': '#F3F4F6',
        // Primary accent
        'primary': '#2563EB',
        'primary-hover': '#1D4ED8',
        'primary-light': '#DBEAFE',
        // Secondary accent
        'accent-indigo': '#6366F1',
        'accent-violet': '#7C3AED',
        // Terminal accent (for code aesthetic)
        'terminal-green': '#10B981',
        'terminal-blue': '#2563EB',
        // Legacy mapping for gradual migration
        'dark-bg': '#FAFBFC',
        'dark-surface': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 40px -12px rgba(0,0,0,0.1)',
        'button-hover': '0 4px 12px rgba(37,99,235,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
