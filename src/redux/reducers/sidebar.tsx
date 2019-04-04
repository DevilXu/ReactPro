export default (state = false, action: any) => {
  switch (action.type) {
    case 'EXPAND':
      return false
    case 'COLLAPSED':
      return true
    default:
      return state;
  }
}