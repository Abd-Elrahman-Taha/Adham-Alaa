/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        docker: {
          bg: '#05080B',
          charcoal: '#0B1117',
          surface: '#111A22',
          surface2: '#16212B',
          surface3: '#1C2936',
          blue: '#2496ED',
          bright: '#4DB3FF',
          soft: '#8DD3FF',
          white: '#F5F7FA',
          muted: '#9AA7B2',
          border: '#24313D',
          borderBright: '#344759',
        },
        status: {
          running: '#10B981',
          ready: '#06B6D4',
          building: '#F59E0B',
          alert: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['Prata', 'Georgia', 'serif'],
      },
      boxShadow: {
        'docker-glow': '0 0 25px -4px rgba(36, 150, 237, 0.22)',
        'docker-glow-lg': '0 0 45px -8px rgba(36, 150, 237, 0.28)',
        'container': '0 12px 30px -8px rgba(5, 8, 11, 0.85)',
        'container-elevated': '0 20px 45px -10px rgba(5, 8, 11, 0.95)',
      },
      backgroundImage: {
        'container-grid': 'linear-gradient(to right, rgba(36, 150, 237, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(36, 150, 237, 0.04) 1px, transparent 1px)',
        'infra-dots': 'radial-gradient(rgba(77, 179, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
