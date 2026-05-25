import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

type CloudflareVitePlugin = {
  cloudflare: () => PluginOption
}

export default defineConfig(async () => {
  const plugins: PluginOption[] = [react(), tailwindcss()]
  const cloudflarePackage = '@cloudflare/vite-plugin'

  try {
    const { cloudflare } = (await import(cloudflarePackage)) as CloudflareVitePlugin
    plugins.push(cloudflare())
  } catch {
    console.warn('Cloudflare Vite plugin not found. Running Vite without Cloudflare integration.')
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
