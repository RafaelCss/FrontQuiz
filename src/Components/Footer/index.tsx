import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import React from "react";
import FooterMod from "./style";

interface IFooter{
  children ?: React.ReactElement
}

function Footer ({children}: IFooter) {


  return (
    <FooterMod>
    <>
      <InstagramOutlined  title="Instagram"/>
      <TwitterOutlined />
      {children}
    </>
    </FooterMod>
  )
}



export default Footer