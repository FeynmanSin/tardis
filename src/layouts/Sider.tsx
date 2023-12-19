import React from 'react';
import type { PropsWithChildren } from 'react';
import { Layout, Menu, theme, } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'umi';

const Sider: React.FC<PropsWithChildren<{
  siderMenuData: MenuProps['items'] | undefined;
}>> = ({
  siderMenuData,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationArr = location.pathname.split('/');

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const handlerMenu: (obj: { key: string, keyPath: [] }) => void = ({ key, keyPath }) => {
      console.log(">>>>>key", key)
      console.log(">>>keyPath", keyPath)
      console.log(">>>>>siderMenuData", siderMenuData)
      // @ts-ignore
      let _d = siderMenuData?.find(item => item.key == keyPath[keyPath.length - 1]);
      console.log('>>>>_d', _d)
      let label;
      if (_d) {
        // @ts-ignore
        if (_d.children) {
          // @ts-ignore
          label = _d.children.find(item => item.key == key).label;
        }
      }
      navigate(key, { replace: true, state: { label } })
    }



    return (
      <Layout.Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          items={siderMenuData}
          onClick={handlerMenu}
          defaultOpenKeys={[`/${locationArr[1]}/${locationArr[2]}`]}
          defaultSelectedKeys={[`/${locationArr[1]}/${locationArr[2]}/${locationArr[3]}`]}
        />
      </Layout.Sider>
    )
  }

export default Sider