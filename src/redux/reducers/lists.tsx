export default (state = [], action: any) => {
  switch (action.type) {
    case 'GETDATA':
      return state = action.payload
    default:
      return state;
  }
}