import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
export default defineConfig({
  root:'github-pages',base:'/birthday-wishlist/',publicDir:'../public',
  resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},
  plugins:[react()],
  define:{'process.env.NEXT_PUBLIC_RESERVATION_API':JSON.stringify(process.env.WISHLIST_API_ORIGIN || 'https://birthday-wishlist-orange-edition.greammy.chatgpt.site'),'process.env.NEXT_PUBLIC_ASSET_BASE':JSON.stringify('/birthday-wishlist/')},
  build:{outDir:'../docs',emptyOutDir:true},
  preview:{host:'127.0.0.1',port:4173,strictPort:true},
});

