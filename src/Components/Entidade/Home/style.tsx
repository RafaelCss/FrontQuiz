import styled, { css } from 'styled-components';

type CardProps = { type: 'primary' };

const CardMod = styled.div<CardProps>`
  ${(props) =>
    props.type == 'primary' &&
    css`
      background-color: #f2f3f8;
      border-color: #999;
      box-shadow: 0 0 5px rgba(243, 7, 7, 0.973);
    `}

  display: flex;
  flex-direction: row;
  gap: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const TituloHome = styled.h1`
  font-size: 5rem;
  font-family: 'Tilt Warp', cursive;
  font-weight: 200;
`;
export { CardMod, Container, TituloHome };
