import React, { Component } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';
import FirstComponent from '../../components/First/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/action/couter';

type MyProps = {
  counter: any,
  actions: any,
  data: Array<any>
}
type MyStates = {
  clickCount: number,
  data: Array<object>,
  value: number
}
class App extends Component<MyProps, MyStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: 0,
      clickCount: 0,
    };
    this.fetchUserList();
  }
  componentDidMount() {
    console.log(this.props);
  }
  fetchUserList() {
    axios('/users/findUsers').then((res) => {
      this.setState({
        data: res.data.content
      })
    })
  }
  changeClickCount() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }
  wuha() {
    alert(1);
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'username',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'userage',
      key: 'age',
    }];
    return (
      <div>
        <div>点击次数：{ this.state.clickCount }</div>
        <Button type="primary" onClick={ this.wuha }>123</Button>
        <div>123: { this.props.counter }</div>
        <FirstComponent value={this.state.clickCount} clickCount = { () => this.props.actions.INCREMENT() }/>
        <FirstComponent value={this.state.clickCount} clickCount = { () => this.props.actions.DECREMENT() }/>
        <Table columns={columns} dataSource={this.state.data} rowKey="_id"/>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  counter: state.counter,
  data: state.list
});
const mapActionToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapActionToProps)(App);
