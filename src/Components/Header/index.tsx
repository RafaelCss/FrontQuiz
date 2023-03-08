import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import HeaderMod from './style';

interface IHeader {
  children?: React.ReactElement;
}

function Header({ children }: IHeader) {
  return (
    <HeaderMod>
      <Logo/>
      <Menu />
    </HeaderMod>
  );
}

export default Header;
