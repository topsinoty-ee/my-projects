/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svg}'],
  theme: {
    colors: {
      'black': '#0C1618',
      'blue': '#162B8C',
      'yellow': '#F5CC00',
      'yellow-accent': '#FFD91A',
      'orange': '#FF900F',
      "white": "#FFFFFF",
      "silver": "#C0C0C0",
      "gray": "#999999",
      "red": "#FF0000",
      "maroon": "#800000",
      "olive": "#808000",
      "lime": "#00FF00",
      "green": "#008000",
      "aqua": "#00FFFF",
      "teal": "#008080",
      "navy": "#000080",
      "fuchsia": "#FF00FF",
      "purple": "#800080",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 5',
      },
    },
  }
}