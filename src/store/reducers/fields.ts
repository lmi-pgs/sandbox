export const fields = (state = [], action: any) => {
  switch (action.type) {
    case 'LOAD_FIELDS_DATA':
      return action.fields.map((field: any) => `${field.x}x${field.y}`)
    default:
      return state;
  }
};