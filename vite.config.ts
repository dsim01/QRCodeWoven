import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
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
  plugins: [
    tsconfigPaths(),
    dts({
      rollupTypes: true,
    }),
  ],
});
