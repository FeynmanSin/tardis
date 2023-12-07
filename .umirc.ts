import { defineConfig } from "umi";
// import routes from './src/router';

export default defineConfig({
  routes: [
    {
      path: "/",
      component: "@/pages",
      routes: [
        {
          path: '/home',
          name: '首页',
          component: '@/pages/home'
        },
        {
          path: "/control",
          name: '访问控制',
          routes: [
            {
              path: "/control/case",
              name: "情况控制",
            },
            {
              path: "/control/log",
              name: "日志检索",
            },
            {
              path: "/control/config",
              name: "策略配置",
            },
          ]
        },
        {
          path: "/statistic",
          name: '统计分析',
          routes: [
            {
              path: "/statistic/user",
              name: "区域可疑用户情况统计",
            },
            {
              path: "/statistic/behavior",
              name: "可疑行为分布情况统计",
            },
          ]
        },
        {
          path: "/system",
          name: '系统管理',
          routes: [
            {
              path: "/system/organization",
              name: "机构管理",
              routes: [
                {
                  path: "/system/organization/info",
                  name: "单位信息",
                }
              ]
            },
            {
              path: "/system/config",
              name: "系统配置",
              routes: [
                {
                  path: "/system/config/menu",
                  name: "菜单管理",
                  component: '@/pages/system/config/menu'
                },
                {
                  path: "/system/config/dictionaries",
                  name: "字典管理",
                  component: '@/pages/system/config/dictionaries'
                },
              ]
            },
            {
              path: "/system/rights",
              name: "用户权限管理",
              routes: [
                {
                  path: "/system/rights/user",
                  name: "用户管理",
                },
                {
                  path: "/system/rights/role",
                  name: "角色管理",
                },
              ]
            },
          ]
        },
      ]
    },
    {
      path: "/login",
      component: "@/pages/login",
      layout: false,
    },
    {
      path: '*',
      component: '@/pages/404'
    }
  ],
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
