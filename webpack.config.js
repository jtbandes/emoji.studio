const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { RawSource } = require("webpack-sources");

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    {
      apply(compiler) {
        compiler.hooks.emit.tap("IndexHtmlPlugin", (compilation) => {
          compilation.emitAsset(
            "index.html",
            new RawSource(
              `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>emoji.studio</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap" rel="stylesheet">
  </head>
  <body>
    <script src="${compilation.entrypoints.get("main").chunks[0].files[0]}"></script>
  </body>
</html>
`,
            ),
          );
        });
      },
    },
  ],
};
