// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'open-sans-1': ['"Open Sans"', 'sans-serif'],
      },
      fontWeight: {
        // Add custom font weights if needed
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-optical-sizing-auto': {
          'font-optical-sizing': 'auto',
        },
        '.font-variation-settings-wdth-100': {
          'font-variation-settings': '"wdth" 100',
        },
      });
    },
  ],
};
