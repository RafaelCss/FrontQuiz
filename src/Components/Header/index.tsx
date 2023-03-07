import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';
import Menu from '../Menu';
import HeaderMod from './style';

interface IHeader {
  children?: React.ReactElement;
}

function Header({ children }: IHeader) {
  return (
    <HeaderMod>
      <Menu />
    </HeaderMod>
  );
}

export default Header;
