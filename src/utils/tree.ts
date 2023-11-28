import {DataNode} from 'antd/es/tree';
import {parse} from 'querystring';

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function buildTreeData(
  data: any[],
  id: string,
  name: string,
  parentId: string,
  parentName: string,
  children: string,
) {
  const config = {
    id: id || 'id',
    name: name || 'name',
    parentId: parentId || 'parentId',
    parentName: parentName || 'parentName',
    children: children || 'children',
  };

  const childrenListMap: any[] = [];
  const nodeIds: any[] = [];
  const tree: any[] = [];
  data.forEach((item) => {
    const d = item;
    const pId = d[config.parentId];
    if (!childrenListMap[pId]) {
      childrenListMap[pId] = [];
    }
    d.key = d[config.id];
    d.title = d[config.name];
    d.value = d[config.id];
    d[config.children] = null;
    nodeIds[d[config.id]] = d;
    childrenListMap[pId].push(d);
  });

  data.forEach((item: any) => {
    const d = item;
    const pId = d[config.parentId];
    if (!nodeIds[pId]) {
      d[config.parentName] = '';
      tree.push(d);
    }
  });

  function adaptToChildrenList(item: any) {
    const o = item;
    if (childrenListMap[o[config.id]]) {
      if (!o[config.children]) {
        o[config.children] = [];
      }
      o[config.children] = childrenListMap[o[config.id]];
    }
    if (o[config.children]) {
      o[config.children].forEach((child: any) => {
        const c = child;
        c[config.parentName] = o[config.name];
        adaptToChildrenList(c);
      });
    }
  }

  tree.forEach((t: any) => {
    adaptToChildrenList(t);
  });

  return tree;
}

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export function formatTreeData(arrayList: any, key: string = 'id', value: string = 'value', title: string = 'label'): DataNode[] {
  if(arrayList && arrayList.length > 0) {
    return arrayList.map((item: any) => {
      const node: DataNode = {
        title: item[title],
        key: item[key],
        value: item[value],
      } as DataNode;
      if (item.children && item.children.length > 0) {
        node.children = formatTreeData(item.children);
      }
      return node;
    });
  }else {
    return []
  }
}

export function formatMenuTreeData(arrayList: any, id: string = 'id', name: string = 'name') {
  if (!Array.isArray(arrayList) || arrayList.length <= 0) {
    return [];
  }
  const res: any = [];
  arrayList.forEach((item) => {
    if (item.children && item.children.length > 0) {
      res.push({
        key: item[id],
        title: item[name],
        value: item[id],
        children: formatMenuTreeData(item.children),
      });
    } else {
      res.push({
        key: item[id],
        title: item[name],
        value: item[id],
      });
    }
  });
  return res;
}

export function formatMenuTreeSelectData(treeJson: any) {
  if (!Array.isArray(treeJson) || treeJson.length <= 0) {
    return [];
  }
  let res: any = [];
  treeJson.forEach((item) => {
    res.push({
      key: item.id,
      title: item.name,
    });
    if (item.children && item.children.length > 0) {
      res = res.concat(formatMenuTreeSelectData(item.children));
    }
  });
  return res;
}

export function formatListObject(array: any, key: string) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = array[i][key];
  }
  return arr;
}

export function formatMenuCascadeData(treeJson: any) {
  if (!Array.isArray(treeJson) || treeJson.length <= 0) {
    return [];
  }
  const res: any = [];
  treeJson.forEach((item) => {
    if (item.children && item.children.length > 0) {
      res.push({
        id: item.id,
        name: item.name,
        children: formatMenuCascadeData(item.children),
      });
    } else {
      res.push({
        id: item.id,
        name: item.name,
      });
    }
  });
  return res;
}

