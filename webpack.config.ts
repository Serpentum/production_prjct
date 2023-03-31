import webpack from "webpack"
import path from 'path';
import 'webpack-dev-server';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildOptions, BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || "development"
  const isDev = mode === "development"
  const port = env.port || 3000

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
  }

  return buildWebpackConfig(options)
}
