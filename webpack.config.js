const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      "fs": false,
      "path": false
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    devMiddleware: {
      publicPath: "/",
      writeToDisk: true,
    },
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glb|gltf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/models/[name][ext]"
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appDirectory, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
