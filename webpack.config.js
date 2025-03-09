module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/, // Ignore node_modules
        use: ["source-map-loader"],
      },
    ],
  },
};

