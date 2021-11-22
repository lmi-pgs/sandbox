import React from 'react';
import { GridItem } from './Field.style';

const Field = ({x, y}: { x: number, y: number }) => {
  return (
    <GridItem x={x} y={y} />
  );
};

export default Field;
