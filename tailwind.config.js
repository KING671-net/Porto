/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-blue': '#00f3ff',
        'cyber-purple': '#9d50ff',
        'cyber-cyan': '#00e7ff',
        'cyber-dark': '#0f0f1a',
        'cyber-neon': '#00ffff',
      },
      animation: {
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 1.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s linear infinite',
        'digital-rain': 'digitalRain 20s linear infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 5px theme(colors.cyber-blue), 0 0 10px theme(colors.cyber-blue)' },
          '50%': { boxShadow: '0 0 15px theme(colors.cyber-blue), 0 0 30px theme(colors.cyber-blue), 0 0 45px theme(colors.cyber-purple)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        digitalRain: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
    },
  },
  plugins: [],
}
