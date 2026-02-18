import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      // Questa è la magia: mappa il nome della lib direttamente ai sorgenti
      'fabkit-lib': path.resolve('../src/lib')
    }
  },
  server: {
    fs: {
      // Permette a Vite di servire file che sono fuori dalla root di "examples"
      allow: ['..']
    }
  }
});