import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ifc-viewer/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        manualChunks: {
          'three': ['three'],
          'web-ifc': ['web-ifc'],
          'components': [
            '@thatopen/components',
            '@thatopen/components-front',
            '@thatopen/fragments',
            '@thatopen/ui',
            '@thatopen/ui-obc'
          ]
        }
      }
    }
  }
})