/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'explora': ['Explora', 'cursive']
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1.0)'},
          '75%': { transform: 'scale(0.9)'}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        scale: 'scale 1.0s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    // ...
  ],
}
