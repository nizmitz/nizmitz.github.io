import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'cfasync-exclude-entry-script',
        transformIndexHtml(html) {
          return html.replace(
            /(<script type="module"[^>]*src="[^"]*")(><\/script>)/,
            '$1 data-cfasync="false"$2'
          );
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Only bucket the eagerly-loaded UI libs. Everything else (notably the
          // @react-pdf and docx graphs, which are only reached via dynamic import) is
          // left to Rollup so it stays in automatically-split lazy chunks — a catch-all
          // 'vendor' would mix eager deps (scheduler) with lazy ones and force both eager.
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (id.includes('/react-dom/') || id.includes('/react/') || id.includes('/scheduler/')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react') || id.includes('/motion/')) {
              return 'vendor-ui';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      sourcemap: false,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
