import webpack, {WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {

  const progressPlugin = new webpack.ProgressPlugin()
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  })
  const cssExtractorPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })

  return [
    htmlWebpackPlugin,
    progressPlugin,
    cssExtractorPlugin,
  ]
}
