import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
  const typescriptExt = ['.tsx', '.ts', '.js']

  return {
    extensions: [].concat(
      typescriptExt,
    )
  }
}
