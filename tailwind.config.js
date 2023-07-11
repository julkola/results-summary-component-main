/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      grotesk: 'HankenGrotesk, sans-serif',
    },
    colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        lightSlateBlue: 'hsl(252, 100%, 67%)',//bg
        lightRoyalBlue: 'hsl(241, 81%, 54%)',//bg
        violetBlue: 'hsla(256, 72%, 46%, 1)',//circle
        persianBlue: 'hsla(241, 72%, 46%, 0)',//circle
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        ring: '0 0 10px 30px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

