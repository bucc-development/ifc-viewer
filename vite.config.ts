/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ifc-viewer/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'web-ifc': ['web-ifc'],
          'components': ['@thatopen/components', '@thatopen/components-front']
        }
      }
    },
    cssCodeSplit: false
  },
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  optimizeDeps: {
    include: ['three', 'web-ifc']
  },
  esbuild: {
    target: 'esnext'
  },
  css: {
    // Ensure CSS modules are handled correctly
    modules: {
      localsConvention: 'camelCase'
    }
  }
})