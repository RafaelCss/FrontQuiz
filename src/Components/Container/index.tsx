import React from "react";
import ContentMod from "./style";


interface IContainer{
  children ?: React.ReactElement
}

function Container ({children}: IContainer) {

  return (
    <ContentMod>
      {children}
    </ContentMod>
  )
}



export default Container