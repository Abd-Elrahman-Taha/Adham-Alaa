/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#06080d',
          900: '#0b0f17',
          850: '#101520',
          800: '#161d2d',
          750: '#1d263a',
          700: '#26334d',
          600: '#394b6d',
          500: '#52668d',
          400: '#7d91b5',
          300: '#a6b7d4',
          200: '#cbd7ec',
          100: '#e7eefa',
        },
        azure: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        dotnet: {
          light: '#a78bfa',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
        },
        telemetry: {
          green: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Prata', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-azure': '0 0 35px -5px rgba(56, 189, 248, 0.15)',
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.12)',
        'panel': '0 20px 40px -15px rgba(0, 0, 0, 0.65)',
        'deep': '0 30px 60px -12px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
