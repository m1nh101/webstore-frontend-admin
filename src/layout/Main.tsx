import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigationBar from "./HeaderNavigationBar";
import styles from './layout.module.scss'
import SidebarMenu from "./SidebarMenu";

const Main: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const onCollapseClick = (value: boolean): void => {
    setCollapse(value);
  }

  return (
    <Layout hasSider className={styles.min_height_100}>
      <Sider collapsible collapsed={collapse} onCollapse={onCollapseClick}>
        <div className={styles.logo}></div>
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header>
          <HeaderNavigationBar />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Main;