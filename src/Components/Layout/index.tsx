import React from 'react';
import { Layout as LayoutAnt, Space } from 'antd';
import style  from './style';
import Footer from '../Footer';

const { Header, Content } = LayoutAnt;


function LayoutApp() {
  return (
      <LayoutAnt>
        <Header style={style.headerStyle}>Header</Header>
        <Content style={style.contentStyle}>Content</Content>
        <Footer/>
      </LayoutAnt>
  );
}
export default LayoutApp;
