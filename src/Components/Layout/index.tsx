import React, { ReactElement, ReactNode } from 'react';
import LayoutMod from './style';

interface ILayoutApp {
  children: ReactNode;
}

function LayoutApp({ children }: ILayoutApp) {
  return (
    <LayoutMod suffixCls='Teste'>
      {children}
    </LayoutMod>
  );
}
export default LayoutApp;
