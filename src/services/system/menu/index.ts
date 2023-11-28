import { Http } from '@/services/request';
import {CodeEnum, DataResult} from '@/utils/result';
import {MenuDataItem} from "@ant-design/pro-layout";
import {createIcon} from "@/utils/icon";
import React, { lazy } from 'react';

export function grantTree() {
  return Http.get<DataResult<Array<API.System.MenuNode>>>('/system/menu/grant/tree');
}

export function tree(params?: API.System.MenuQuery) {
  return Http.get<DataResult<Array<API.System.MenuVO>>>('/system/menu/tree', params);
}

export function save(data: API.System.MenuDTO) {
  return Http.post<DataResult<null>>('/system/menu/save', data);
}

export function update(data: API.System.MenuDTO) {
  return Http.post<DataResult<null>>('/system/menu/update', data);
}

export function remove(data: API.Base.DeleteDTO) {
  return Http.post<DataResult<null>>('/system/menu/delete/logic', data);
}

let remoteMenu: any = null;

export function getRemoteMenu() {
  return remoteMenu;
}

export function setRemoteMenu(data: any) {
  remoteMenu = data;
}

function patchRouteItems(route: any, menu: any, parentPath: string) {
  for (const menuItem of menu) {
    if (menuItem.component === 'Layout' || menuItem.component === 'ParentView') {
      if (menuItem.routes) {
        let hasItem = false;
        let newRoute: API.System.RouteItem = {};
        for (const routeChild of route.routes) {
          if (routeChild.path === menuItem.path) {
            hasItem = true;
            newRoute = routeChild;
          }
        }
        if (!hasItem) {
          newRoute = {
            path: menuItem.path.startsWith('/') ? menuItem.path : '/' + menuItem.path,
            routes: [],
            children: []
          }
          route.children.push(newRoute);
          route.routes.push(newRoute)
        }
        patchRouteItems(newRoute, menuItem.routes,newRoute.path + '/');
      }
    } else {
      const names: string[] = menuItem.component.split('/');
      let componentPath = '';
      names.forEach(name => {
        if (componentPath.length > 0) {
          componentPath += '/';
        }
        if (name !== 'index') {
          componentPath += name.at(0)?.toUpperCase() + name.substring(1, name.length);
        } else {
          componentPath += name;
        }
      })
      if (!componentPath.endsWith('.tsx')) {
        componentPath += '.tsx'
      }
      if (route.routes === undefined) {
        route.routes = [];
      }
      if (route.children === undefined) {
        route.children = [];
      }
      const newRoute: API.System.RouteItem = {
        element:  React.createElement(
          React.Suspense,
          { fallback: React.createElement('div', null, 'Loading...') },
          React.createElement(lazy(() => import('@/pages/' + componentPath)))
        ),
        path: parentPath + menuItem.path,
      }
      route.children.push(newRoute);
      route.routes.push(newRoute);
    }
  }
}

export function patchRouteWithRemoteMenus(routes: any) {
  if (remoteMenu === null) { return; }
  let proLayout = null;
  for (const routeItem of routes) {
    if (routeItem.id === 'ant-design-pro-layout') {
      proLayout = routeItem ;
      break;
    }
  }
  patchRouteItems(proLayout, remoteMenu, '/');
}


export function convertCompatRouters(childless: API.System.MenuNode[]): any[] {
  return childless.map((item: API.System.MenuNode) => {
    return {
      id: item.id,
      path: item.path,
      icon: createIcon(item.icon),
      name: item.name,
      routes: item.children && item.children.length > 0 ? convertCompatRouters(item.children) : undefined,
      hideChildrenInMenu: item.hideChildren,
      hideInMenu: item.showMenu,
      component: item.component,
      parentId: item.parentId,
      authority: item.perms,
      redirect: item.redirect
    };
  });
}

export function getRoutersInfo(): Promise<MenuDataItem[]> {
  return grantTree().then((res: DataResult<Array<API.System.MenuNode>>) => {
    if (CodeEnum.SUCCESS === res.code) {
      return convertCompatRouters(res.data);
    } else {
      return [];
    }
  });
}

export function getMatchMenuItem(
  path: string,
  menuData: MenuDataItem[] | undefined,
): MenuDataItem[] {
  if (!menuData) return [];
  let items: MenuDataItem[] = [];
  menuData.forEach((item) => {
    if (item.path) {
      if (item.path === path) {
        items.push(item);
        return;
      }
      if (path.length >= item.path?.length) {
        const exp = `${item.path}/*`;
        if (path.match(exp)) {
          if (item.routes) {
            const subPath = path.substr(item.path.length + 1);
            const subItem: MenuDataItem[] = getMatchMenuItem(subPath, item.routes);
            items = items.concat(subItem);
          } else {
            const paths = path.split('/');
            if (paths.length >= 2 && paths[0] === item.path && paths[1] === 'index') {
              items.push(item);
            }
          }
        }
      }
    }
  });
  return items;
}
