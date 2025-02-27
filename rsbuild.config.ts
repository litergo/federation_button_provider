import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  output: {
    assetPrefix: 'auto',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_button_provider',
      exposes: {
        './button': './src/button.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: process.env.PORT || 3000,
  },
});
