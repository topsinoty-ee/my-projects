/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js,svg}'],
  theme: {
    colors: {
      black: '#0C1618',
      blue: '#162B8C',
      yellow: '#F5CC00',
      'yellow-accent': '#FFD91A',
      orange: '#FF900F',
      white: '#FFFFFF',
      silver: '#C0C0C0',
      gray: '#999999',
      red: '#FF0000',
      maroon: '#800000',
      olive: '#808000',
      lime: '#00FF00',
      green: '#008000',
      aqua: '#00FFFF',
      teal: '#008080',
      navy: '#000080',
      fuchsia: '#FF00FF',
      purple: '#800080',
      'light-blue': '#423CD1',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      redhat: '"Red Hat Display"',
      Encode: "'Encode Sans'",
      urbanist: 'urbanist',
    },
    backgroundImage: {
      'CycloneHD-Logo-background':
        'url("/src/Assets/CycloneHD/Assets/CycloneHD.png")',
      'CycloneHD-hero-background':
        'url("/src/Assets/CycloneHD/Assets/headphones-hero.jpg")',
      'CycloneHD-headphones-1':
        'url("/src/Assets/CycloneHD/Assets/headphones-1.jpg")',
      'CycloneHD-headphones-2':
        'url("/src/Assets/CycloneHD/Assets/headphones-2.jpg")',
      'CycloneHD-headphones-3':
        'url("/src/Assets/CycloneHD/Assets/headphones-3.jpg")',
      'CycloneHD-headphone-item-1':
        'url("/src/Assets/CycloneHD/Assets/headphones-item-1.jpg")',
      'CycloneHD-headphone-item-2':
        'url("/src/Assets/CycloneHD/Assets/headphones-item-2.jpg")',
      'CycloneHD-headphone-item-3':
        'url("/src/Assets/CycloneHD/Assets/headphones-item-3.jpg")',
    },
    screens: {
      sm: { max: '399px' },
      md: { min: '400px', max: '699px' },
      lg: { min: '700px', max: '1024px' },
      xl: { min: '1025px', max: '1280px' },
      xxl: { min: '1281px' },
      tablet: { min: '641px', max: '1024px', orientation: 'portrait' },
      landscape: { min: '641px', max: '1024px', orientation: 'landscape' },
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
  },
};
