import vue from '@vitejs/plugin-vue';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins = [
    // have to
    vue(),
  ];

  return vitePlugins;
}
