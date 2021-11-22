import styled, { css } from 'styled-components';

interface IProps {
  x: number;
  y: number;
}

export const GridItem = styled.div`
  ${({ x, y }: IProps) => css`
  display: inline;
    background-color: red;
    grid-column-start: ${x};
    grid-row-start: ${y};
  `}
`;
