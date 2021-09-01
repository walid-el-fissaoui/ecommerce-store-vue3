module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-color-1": "#e53637",
        "custom-color-2": "#3d3d3d",
        "custom-color-3": "#b7b7b7",
        "custom-color-4": "#F2F3EC",
        "custom-color-5": "#F3F2EE",
        "custom-color-6": "#212529",
        "custom-color-7": "#e5e5e5",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "maven": ["Maven Pro", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '692px',
          },
          '@screen lg': {
            maxWidth: '922px',
          },
          '@screen xl': {
            maxWidth: '1152px',
          },
          '@screen 2xl': {
            maxWidth: '1382px',
          },
        }
      })
    }
  ],
}
