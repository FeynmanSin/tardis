import { defineConfig } from "umi";

export default defineConfig({
  proxy: {
    '/kmdm': {
      target: 'http://121.8.201.149:64666',// kmdm练习环境
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  npmClient: 'pnpm',
  hash: true,
});
