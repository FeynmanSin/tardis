# bright-ui

pnpm i  安装

pnpm  run  dev 运行项目


每一个模块页面必须新建一个.md说明该文件为哪一个


### 基础方法

@/layout/index.tsx 中的AppContext用于全局共享数据,主要为界面配置项 (因React  context的特性慎用,非全组件都需要共享的数据不要使用)

```
siderHandler方法传入boolean值,调用此方法可选择是否显示Sider
```


### 路由

此项目采用约定式路由 ( 约定式路由方法使用详情:  https://umijs.org/docs/guides/routes ) 无需写死或配置路由列表,通过配合从接口返回的用户路由列表渲染对应的导航栏,达到路由权限的效果.

调用接口获取路由位置为@/layout/index.tsx中.


### 组件

@/components/Basics 存放针对Antd UI 库进行二次封装的基础组件,方便生成页面减少重复的配置
