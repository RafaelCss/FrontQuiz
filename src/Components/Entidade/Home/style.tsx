import styled from 'styled-components';

const Corrosel = styled.div`
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
  gap: 20rem;
`;

const TituloHome = styled.h1`
  font-size: 5rem;
  font-family: 'Tilt Warp', cursive;
  font-weight: 200;
`;
export { Corrosel, Container, TituloHome };
