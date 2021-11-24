import styled, { css } from 'styled-components';

interface IProps {
  x: number;
  y: number;
}

export const GridItem = styled.div`
  ${({ x, y }: IProps) => css`
    background-color: #009688;
    grid-column-start: ${x};
    grid-row-start: ${y};
    position: relative;
    border-radius: 50%;
    border: 4px solid black;

    .test {
      content: '';
      position: absolute;
      width: 1600px;
      height: 1200px;
      background-image: radial-gradient(transparent 15%, #0000009c 35%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  `}
`;
