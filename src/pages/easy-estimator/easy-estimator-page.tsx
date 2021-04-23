import React, { useState } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SideMenu from './components/side-menu/side-menu';
import ScrollableArea from './components/scrollable-area/scrollable-area';
import { Price } from './components/price/price';

export interface EasyEstimatorPageProps {}

export function EasyEstimatorPage(props: EasyEstimatorPageProps) {
  const [active, setActive] = useState('information');

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <SideMenu active={active} setActive={setActive}></SideMenu>
      </Sider>

      <Layout
        className="site-layout"
        style={{ marginLeft: 220, marginRight: 220 }}
      >
        <Content className="site-layout-background">
          <ScrollableArea active={active}></ScrollableArea>
        </Content>
      </Layout>

      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
        }}
      >
        <Price></Price>
      </Sider>
    </Layout>
  );
}

export default EasyEstimatorPage;
