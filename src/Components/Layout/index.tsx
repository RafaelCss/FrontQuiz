import React, { ReactElement } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Container from '../Container';
import LayoutMod from './style';

interface ILayoutApp {
  children?: ReactElement;
}

function LayoutApp({ children }: ILayoutApp) {
  return (
    <LayoutMod>
      <Header />
      <Container />
      <Footer />
      {children}
    </LayoutMod>
  );
}
export default LayoutApp;
