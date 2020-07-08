module.exports = {
  purge: {
    enabled: false,
    content: [
      'src/**/*.html',
      'src/**/*.js'
    ]
  },
  theme: {
    extend: {
      height: {
        "80": "20rem",
        "100": "25rem",
      },
      width: {
        "80": "20rem",
        "100": "25rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
