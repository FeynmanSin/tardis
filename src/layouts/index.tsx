import React, { useEffect, useState, createContext, } from 'react'
import { Layout, ConfigProvider, Menu, theme, Spin } from 'antd';
import { useNavigate, Outlet, useLocation } from 'umi';
// @ts-ignore
import type { Location } from "history";
import { currentUser as queryCurrentUser } from '@/services/system/user';
import { PageEnums } from '@/enums/pagesEnums';
import Sider from './Sider';
import './index.less';
import routes from '../router';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

dayjs.locale('zh-cn');
const { Header, Content } = Layout;


export interface AppContextType {
  siderHandler: (whether: boolean) => void;
}



export const AppContext = createContext<AppContextType>({} as AppContextType);

const Index: React.FC = () => {
  const [loading, setLoading] = useState<any>(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [headerMenuData, setHeaderMenuData] = useState<any>();
  const [selectedHeaderMenuItem, setSelectedHeaderMenuItem] = useState<string>();
  const [siderMenuData, setSiderMenuData] = useState<[]>([]);
  const [isShowSider, setIsShowSider] = useState<boolean>(true);
  const [label, setLabel] = useState('');
  const navigate = useNavigate();
  const location: Location = useLocation();
  const context: AppContextType = {
    siderHandler
  }
  useEffect(() => {
    fetchUserInfo();
    getHeaderMenuData();
  }, []);

  useEffect(() => {
    getSiderMenuData();
  }, [selectedHeaderMenuItem]);

  useEffect(() => {
    if (location.pathname != '/login' && location.pathname != '/' && location.pathname != '/home') {
      getLabel()
    }
  }, [location]);

  // 控制是否展示侧边栏
  function siderHandler(whether: boolean) {
    setIsShowSider(whether);
  }

  const getLabel = () => {
    console.log(">>>>>>location.state", location.state)
    if (location.state) {
      setLabel(location.state.label ? location.state.label : '');
    }
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getHeaderMenuData = () => {
    let menu: {}[] = [];
    routes.forEach(item => {
      menu.push({
        key: item.path,
        label: item.name
      })
    });
    setHeaderMenuData(menu);
  }

  const getSiderMenuData = () => {
    const _location = `/${location.pathname.split('/')[1]}`
    const route = routes.find(item => {
      if (item.path == selectedHeaderMenuItem || item.path == _location) {
        return item
      }
    });
    if (route && route.routes) {
      let menu: {}[] = [];
      route.routes.forEach(item => {
        // @ts-ignore
        if (item.routes) {
          let _children = [];
          // @ts-ignore
          _children = item.routes.map(item2 => {
            return {
              key: item2.path,
              label: item2.name
            }
          })
          menu.push({
            key: item.path,
            label: item.name,
            children: _children
          });
        } else {
          menu.push({
            key: item.path,
            label: item.name,
          });
        }

      });
      // @ts-ignore
      setSiderMenuData(menu);
      setIsShowSider(true)
    } else {
      setIsShowSider(false)
    }
  }

  const headerMenuClick: (obj: { key: string }) => void = ({ key }) => {
    setSelectedHeaderMenuItem(key);
    navigate(key);
  }

  const fetchUserInfo = async () => {
    console.log(">>>>>>>", location)
    try {
      setLoading(true);
      const res = await queryCurrentUser();
      console.log('>>>>res', res)
      setUserInfo(res.data);
    } catch (error) {
      navigate(PageEnums.LOGIN, { replace: true });
    } finally {
      setLoading(false);
    }
  }


  return (
    <ConfigProvider locale={zhCN}>
      <AppContext.Provider value={context}>
        <Spin spinning={loading}>
          {

            <Layout >
              {
                location.pathname != '/login' && <Header style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{}} >运行监控系统</div>
                  <Menu theme="dark" mode="horizontal" items={headerMenuData} onClick={headerMenuClick} defaultSelectedKeys={[`/${location.pathname.split('/')[1]}`]} />
                </Header>
              }
              <Layout>
                {
                  isShowSider && <Sider siderMenuData={siderMenuData} />
                }
                <Layout >
                  {
                    isShowSider && (
                      <div className="title-menu">
                        <p className="title-menu-text">
                          <span>{label}</span>
                        </p>
                      </div>
                    )
                  }
                  <Content
                    style={{
                      padding: 10,
                      margin: 0,
                      height: 'calc(100vh - 64px - 94px)',
                      background: colorBgContainer,
                      overflow: 'auto'
                    }}
                  >
                    <Outlet />
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          }
        </Spin>
      </AppContext.Provider>
    </ConfigProvider>
  );
}

export default Index;