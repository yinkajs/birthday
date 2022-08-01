/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [    // Example content paths...
    './public/**/*.{html,js}',
  ],

  theme: {
    extend: {
      colors: {
        bkg: "#171819",
        muted: "#C9CBCF",
        accent: "#66CCC1",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      fontFamily: {
        body: ['Nunito']
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '60px auto auto 55px',
      },
      height: theme => ({
        ascreen: '94vh',
      }),
      variants: {},
      plugins: [],
    }
  }
}