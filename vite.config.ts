import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ["icon.avif"],
        injectRegister: 'auto',
        manifest: {
            name: "OIT Bus App",
            short_name: "OIT Bus App",
            description: "OIT Bus App",
            theme_color: "#00a1ea",
            start_url: "/?source=pwa",
            "icons": [
                {
                    "src": "icon.aivf",
                    "sizes": "64x64 32x32 24x24 16x16",
                    "type": "image/aivf"
                },
                {
                    "src": "icon.aivf",
                    "type": "image/aivf",
                    "sizes": "192x192"
                },
                {
                    "src": "icon.aivf",
                    "type": "image/aivf",
                    "sizes": "512x512"
                }
            ],
        }
    })
],
})
