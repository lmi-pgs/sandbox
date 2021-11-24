import styled, { css } from 'styled-components';

interface IProps {
  x: Array<number> | number;
  y: Array<number> | number;
}

export const GridItem = styled.div`
  ${({ x, y }: IProps) => css`
    background-color: #564139;
    position: relative;

    &:before {
      content: '';
      position: absolute;
    }

    ${typeof x === 'number' ? css`
      grid-column-start: ${x};
    ` : css`
      grid-column-start: ${x[0]};
      grid-column-end: ${x[1]};
    `}

    ${typeof y === 'number' ? css`
      grid-row-start: ${y};
    ` : css`
      grid-row-start: ${y[0]};
      grid-row-end: ${y[1]};
    `}
  `}
`;
