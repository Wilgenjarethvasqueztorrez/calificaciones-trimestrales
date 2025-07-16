import { defineConfig } from "vite";  
import { resolve } from 'path';  
  
export default defineConfig({  
  root: "./",  
  base: "/calificaciones-trimestrales/",  
  build: {  
    outDir: "dist",  
    assetsDir: "assets",  
    rollupOptions: {  
      input: {  
        main: resolve(__dirname, 'index.html'),  
        login: resolve(__dirname, 'login.html'),  
        calificaciones: resolve(__dirname, 'calificaciones.html')  
      }  
    }  
  },  
  plugins: []  
});