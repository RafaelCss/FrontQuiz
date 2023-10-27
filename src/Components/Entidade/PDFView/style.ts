import styled, { CSSProperties } from 'styled-components';

const DivCenterStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: 'center';
  flex-direction: 'column';
  #toolbar {
    display: none;
  }
`;

const IFrame = styled.iframe`
  width: 80%;
  height: 800px;
  border: none;
  display: block;
  background-color: white;
`;

export { DivCenterStyle, IFrame };
