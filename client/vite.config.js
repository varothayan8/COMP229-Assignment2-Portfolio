import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration. base "/" keeps asset URLs absolute so deep links such as
// /projects load correctly on Vercel (paired with the rewrite in vercel.json).
export default defineConfig({
  plugins: [react()],
  base: "/",
  // Dev only: forward API calls to the Express backend (MyPortfolio/server.js on port 3000)
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/auth": "http://localhost:3000",
    },
  },
});
