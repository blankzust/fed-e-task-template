var HtmlWepackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'none',
    devtool: "source-map",
    stats: 'none',
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new HtmlWepackPlugin()
    ]
}