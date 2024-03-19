import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.mjs'),
      name: 'qr-code-woven',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'build',
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
