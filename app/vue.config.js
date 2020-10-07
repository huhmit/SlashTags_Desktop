module.exports = {
  pluginOptions: {
    electronBuilder: {
        nodeIntegration: true
    }
  },
  devServer: {
    proxy: 'http://backend.test/',
  },

  "transpileDependencies": [
    "vuetify"
  ]
}