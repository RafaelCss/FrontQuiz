const { default: next } = require('next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  compiler: {
    reactStrictMode: true,
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: false,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      // fileName: true,
      // Empty by default.
      // topLevelImportPaths?: string[],
      // // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // // Enabled by default.
      // cssProp?: boolean,
      // // Empty by default.
      // namespace?: string,
      // // Not supported yet.
      // minify?: boolean,
      // // Not supported yet.
      // transpileTemplateLiterals?: boolean,
      // // Not supported yet.
      // pure?: boolean,
    },
  },
};
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
