import styled from 'styled-components';

export const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

export const GridContainer = styled.div`
  width: 2400px;
  height: 1800px;
  background-image: url('./batthern.png');
  background-color: #63646c;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25px);
  grid-template-rows: repeat(auto-fill, 25px);
  position: absolute;
  top: -600px;
  left: -800px;
  z-index: -1;
`;

export const GameContainer = styled.div`
  transform: rotateX(45deg);
  border: 2px solid black;
  width: 800px;
  height: 600px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    background-image: radial-gradient(transparent 50%, black);
    position: absolute;
    width: inherit;
    height: inherit;
    left: 0;
    top: 0;
  }
`;

export const BackgroundArea = styled.div`
  background-color: #000;
  grid-row-start: 43;
  grid-row-end: 49;
  grid-column-start: 33;
  grid-column-end: 48;
`;

export const BackgroundAreaB = styled.div`
  background-color: #000;
  grid-row-start: 41;
  grid-row-end: 49;
  grid-column-start: 56;
  grid-column-end: 65;
`;

export const BackgroundAreaC = styled.div`
  background-color: #000;
  grid-row-start: 24;
  grid-row-end: 37;
  grid-column-start: 56;
  grid-column-end: 65;
`;
