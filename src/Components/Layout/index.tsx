import React from 'react';
import { Layout as LayoutAnt } from 'antd';
import Footer from '../Footer';
import Header from '../Header';
import Container from '../Container';

interface  ILayoutApp{
  children ?: React.ReactElement
}

function LayoutApp({children}: ILayoutApp) {
  return (
      <LayoutAnt>
        <Header/>
        <Container/>
        <Footer/>
      </LayoutAnt>
  );
}
export default LayoutApp;
