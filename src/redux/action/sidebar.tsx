import axios from 'axios';

const menuCollapsed = {
  EXPAND: () => ({
    type: 'EXPAND',
    payload: false
  }),
  COLLAPSED: () => ({
    type: 'COLLAPSED',
    payload: true
  })
}
export default menuCollapsed;