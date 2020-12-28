module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "~@/scss/global.scss";`
          }
        }
      }
};