import React, { Component } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';

interface MyProps {
  history: any
}
interface MyStates {
  data: Array<any>
}
class UserIndex extends Component<MyProps, MyStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }
  static getDerivedStateFromProps(props: any, state: any) {
    return true;
  }
  shouldComponentUpdate(nextProps: any,nextState: any) {
    return true;
  }
  componentDidMount() {
    this.axiosGetData();
  }
  axiosGetData() {
    axios.get('https://www.easy-mock.com/mock/5ac2e5af14c2bf39ccc9cdf3/mockgj/match').then((res) => {
      this.setState({
        data: res.data.crash
      })
    }).catch(() => {});
  }
  clickToJump() {
    this.props.history.push({
      pathname: '/about/userAdd',
      state: {hah: 'aaa'}
    });
  }
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <div>
        <Button onClick={() => this.clickToJump()}>
          新增
        </Button>
        <Table dataSource={dataSource} columns={[]} />
      </div>
    );
  }
}

export default UserIndex;
