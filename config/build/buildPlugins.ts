import webpack, {DefinePlugin, WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

  const progressPlugin = new webpack.ProgressPlugin()
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: paths.html,
  })
  const cssExtractorPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })
  const globalDefine = new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev)
  })

  return [
    htmlWebpackPlugin,
    progressPlugin,
    cssExtractorPlugin,
    globalDefine,
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean)
}
