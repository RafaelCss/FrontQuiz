import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import React from "react";
import HeaderMod from "./style";

interface IHeader{
  children ?: React.ReactElement
}

function Header ({children}: IHeader) {


  return (
    <HeaderMod>
    <>
      <InstagramOutlined  title="Instagram"/>
      <TwitterOutlined title="Twitter" />
      {children}
    </>
    </HeaderMod>
  )
}



export default Header