module.exports = {
    plugins: {
      'css-mqpacker': {},
      'autoprefixer': {},
      'cssnano': {
          preset: [
              'default', {
                  discardComments: {
                      removeAll: true
                  }
              }
          ]
      }
    }
  }
