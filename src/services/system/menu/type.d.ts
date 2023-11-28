declare namespace API.System {
  type MenuNode = {
    name: string;
    code: string;
    alias: string;
    path: string;
    component: string;
    icon: string;
    redirect: string;
    show: boolean;
    showMenu: boolean,
    hideChildren: boolean;
    hiddenHeaderContent: boolean;
    perms: string;
    target: string;
    children?: MenuNode[];
    parentId: string;
    [key: string]: any;
  }&API.Base.BaseVO

  type MenuDTO = {
    parentId?: string,
    code?: string,
    perms?: string,
    alias?: string,
    source?: string,
    sort: string,
    category: number,
    action: number,
    remark?: string,
    openType: number,
    location?: number,
    disabled: number,
    path?: string;
    redirect?: string;
    name?: string;
    component?: string;
    icon?: string;
    layout?: boolean;
    access? : string;
  }&API.Base.BaseDTO

  type MenuVO = {
    parentId?: string,
    code?: string,
    perms?: string,
    alias?: string,
    source?: string,
    sort: string,
    category: number,
    action: number,
    remark?: string,
    openType: number,
    location?: number,
    disabled: number,
    path?: string;
    redirect?: string;
    name?: string;
    component?: string;
    icon?: string;
    layout?: boolean;
    access? : string;
    children?: MenuNode[];
  }&API.Base.BaseVO

  type MenuQuery = {
    onlyMenu: number;
    code?: string,
    name?: string;
  }&API.Base.BaseQuery

  type RouteItem = {
    path?: string;
    name?: string;
    icon?: string;
    id?: number | string;
    parentId?: number | string;
    element?: JSX.Element;
    children?: RouteItem[];
    routes?: RouteItem[] | Array[RouteItem];
  }
}
