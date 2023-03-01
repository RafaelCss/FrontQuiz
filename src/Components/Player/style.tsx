/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

interface TypePlayer {
  right?: boolean;
  left ?: boolean;
  color ?: string;
}


const Head = styled.div<TypePlayer>`
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  width: 20px;
  height: 20px;
  background-color: #f5f4bf;
`;

const Eye = styled.div<TypePlayer>`
  display : flex;
  width: 4px;
  height: 4px;
  margin-bottom:7px;
  background-color: #000000;
  position: absolute;
  top: 6px;
  left: ${props => props.right ? '5px' : '12px'};
`;

const Mouth = styled.div`
  width: 5px;
  height: 2px;
  background-color: #faa2a2;
  position: absolute;
  top: 12px;
  left: 8px;
`;

const Body = styled.div`
  width: 20px;
  margin-top:3px;
  height: 24px;
  background-color:${ props => props.color ? props.color : ' #0099ff'};
  position: relative;
  top: -4px;
`;

const Arm = styled.div<TypePlayer>`
  width: 8px;
  height: 20px;
  background-color: #f5f4bf;
  position: absolute;
  top: 16px;
  left: ${props => props.right ? '-8px' : '20px'};
`;

const Hand = styled.div`
  width: 4px;
  height: 4px;
  background-color: #16dbcb;
  position: absolute;
  top: 16px;
  left: 2px;
`;

const Leg = styled.div<TypePlayer>`
  width: 8px;
  height: 20px;
  margin-left:-2px;
  background-color:${ props => props.color ? props.color : '#f5f4bf'};
  position: absolute;
  top: 36px;
  left: ${props => props.right ? '3px' : '12px'};
`;

const Foot = styled.div`
  width: 6px;
  height: 4px;
  background-color: #ee5a5a;
  position: relative;
  top: 16px;
  left: 1px;
`;

const Player = styled.div`
  display :flex;
  flex-direction:column;
  position: absolute;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  image-rendering: pixelated;
`;


export default { Head ,Eye , Mouth, Body, Arm, Hand, Leg, Foot, Player   }