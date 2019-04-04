import axios from 'axios';

const Lists = {
  GETDATA: (data: any) => ({
    type: 'GETDATA',
    payload: data
  })
}
export function getLists() {
  //action可以是一个函数，有dispatch参数
  return (dispatch: any) => {
    axios.get('https://www.easy-mock.com/mock/5ac2e5af14c2bf39ccc9cdf3/mockgj/ddd#!method=get').then((res)=>{
      const data=res.data;
      dispatch(Lists.GETDATA(data))
    }).catch((e)=>{
      console.log(e);
    });
  }
}
export default Lists;