const routes = [
  {
    path: '/home',
    name: '首页',
    component: '@/pages/home'
  },
  {
    path: '/technical',
    name: '技术例子',
    routes: [
      {
        path: "/technical/lazy",
        name: "懒加载",
        routes: [
          {
            path: "/technical/lazy/virtualList",
            name: "虚拟列表",
          },
        ]
      },
      {
        path: "/technical/upload",
        name: "上传",
        // routes: [
        //   {
        //     path: "/technical/lazy/virtualList",
        //     name: "虚拟列表",
        //   },
        // ]
      },
    ]
  },
  // {
  //   path: "/control",
  //   name: '访问控制',
  //   routes: [
  //     {
  //       path: "/control/case",
  //       name: "控制情况",
  //       routes: [
  //         {
  //           path: "/control/case/suspiciousUser",
  //           name: '可疑用户',
  //         },
  //         {
  //           path: "/control/case/curControlled",
  //           name: '当前受控',
  //         },
  //         {
  //           path: "/control/case/historyControl",
  //           name: '历史控制',
  //         },
  //       ]
  //     },
  //     {
  //       path: "/control/log",
  //       name: "日志检索",
  //       routes: [
  //         {
  //           path: "/control/log/logList",
  //           name: '日志列表',
  //         },
  //       ]
  //     },
  //     {
  //       path: "/control/config",
  //       name: "策略配置",
  //       routes: [
  //         {
  //           path: "/control/config/levelManage",
  //           name: '预警级别管理',
  //         },
  //         {
  //           path: "/control/config/ruleManage",
  //           name: '预警规则管理',
  //         },
  //         {
  //           path: "/control/config/strategyManage",
  //           name: '策略管理',
  //         },
  //         {
  //           path: "/control/config/trackingConfig",
  //           name: '埋点设置',
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   path: "/statistic",
  //   name: '统计分析',
  //   routes: [
  //     {
  //       path: "/statistic/user",
  //       name: "区域可疑用户情况统计",
  //     },
  //     {
  //       path: "/statistic/behavior",
  //       name: "可疑行为分布情况统计",
  //     },
  //   ]
  // },
  // {
  //   path: "/system",
  //   name: '系统管理',
  //   routes: [
  //     {
  //       path: "/system/organization",
  //       name: "机构管理",
  //       routes: [
  //         {
  //           path: "/system/organization/info",
  //           name: "单位信息",
  //         }
  //       ]
  //     },
  //     {
  //       path: "/system/config",
  //       name: "系统配置",
  //       routes: [
  //         {
  //           path: "/system/config/menu",
  //           name: "菜单管理",
  //         },
  //         {
  //           path: "/system/config/dictionaries",
  //           name: "字典管理",
  //         },
  //       ]
  //     },
  //     {
  //       path: "/system/rights",
  //       name: "用户权限管理",
  //       routes: [
  //         {
  //           path: "/system/rights/user",
  //           name: "用户管理",
  //         },
  //         {
  //           path: "/system/rights/role",
  //           name: "角色管理",
  //         },
  //       ]
  //     },
  //   ]
  // },
]
export default routes;