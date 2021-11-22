import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GridItem } from './Player.style';

const getNextPosition = (keyValue: number, position: { x: number, y: number}) => {
  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;
  const { x, y } = position;

  if (keyValue === KEY_UP) {
    return { x, y: y - 1 };
  }

  if (keyValue === KEY_DOWN) {
    return { x, y: y + 1 };
  }

  if (keyValue === KEY_LEFT) {
    return { x: x - 1, y };
  }

  if (keyValue === KEY_RIGHT) {
    return { x: x + 1, y };
  }

  return position;
}

const checkCollisions = ({ x, y }: { x: number, y: number}, fields: any) => {
  const hashCode = `${x}x${y}`;

  return fields.find((field: any) => field === hashCode);
}

const Player = (props: any) => {
  const [position, setPosition] = useState({ x: 5, y: 5 }); 

  const changePosition = (event: any) => {
    const nextPosition = getNextPosition(event.keyCode, position);
    const hasCollision = checkCollisions(nextPosition, props.fields);

    if (!hasCollision) {
      setPosition(nextPosition);
    }
  }

  useEffect(() => {
    if (props.fields.length) {
      document.addEventListener('keydown', changePosition);
    }
    return () => document.removeEventListener('keydown', changePosition);
  }, [props.fields, changePosition]);

  return (
    <GridItem 
      x={position.x} 
      y={position.y}
      onKeyDown={changePosition}
      tabIndex={0}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    fields: state.fields,
  };
};

export const PlayerContainer = connect(mapStateToProps, null)(Player);
