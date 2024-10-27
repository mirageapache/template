const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // 入口 JavaScript 文件
  output: {
    filename: "js/bundle.js", // 輸出的 JS 文件
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // 使用 sass-loader, css-loader, style-loader 處理 SCSS 文件
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.js$/, // 處理 JavaScript 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 原始 HTML 文件
      filename: "index.html",
    }),
  ],
  devServer: {
    static: "./dist", // 開發伺服器根目錄
  },
  mode: "development", // 開發模式
};
