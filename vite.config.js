import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.mjs'),
      name: 'QRCodeWoven',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'build',
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react',
        },
      },
    },
  },
});
