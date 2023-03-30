import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/i,
            localIdentName: options.isDev
              ? '[path][name]__[local]-[hash:base64:5]'
              : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  return [
    typescriptLoader,
    sassLoader,
  ]
}
