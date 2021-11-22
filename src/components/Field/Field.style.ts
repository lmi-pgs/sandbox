import styled, { css } from 'styled-components';

interface IProps {
  x: number;
  y: number;
}

export const GridItem = styled.div`
  ${({ x, y }: IProps) => css`
    background-color: green;
    grid-column-start: ${x};
    grid-row-start: ${y};
  `}
`;
