export const fields = (state = [], action: any) => {
  switch (action.type) {
    case 'LOAD_FIELDS_DATA':
      return action.fields.flatMap(({ x, y }: any) => {
        if (typeof x === 'number') {
          if (typeof y === 'number') {
            return `${x}x${y}`;
          }
        
          const arr = [];
          for (let val = y[0]; val < y[1]; val++) {
            arr.push(`${x}x${val}`);
          }
          return arr;
        }

        const arr = [];
        for (let val = x[0]; val < x[1]; val++) {
          arr.push(`${val}x${y}`);
        }
        return arr;
      })
    default:
      return state;
  }
};
