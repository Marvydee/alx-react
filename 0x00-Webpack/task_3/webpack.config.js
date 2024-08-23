const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ filename: "./index.html" }),
    new CleanWebpackPlugin(),
  ],
  entry: {
    header: {
      import: "./modules/header/header.js",
      dependOn: "shared",
    },
    body: {
      import: "./modules/body/body.js",
      dependOn: "shared",
    },
    footer: {
      import: "./modules/footer/footer.js",
      dependOn: "shared",
    },
    shared: "jquery",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devServer: {
    static: path.join(__dirname, "./public"),
    open: true,
    port: 8564,
  },
};
