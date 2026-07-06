import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'projects/project-1.html'),
        project2: resolve(__dirname, 'projects/project-2.html'),
        project3: resolve(__dirname, 'projects/project-3.html'),
      }
    }
  }
});
