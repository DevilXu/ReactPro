import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLists } from '../../redux/action/lists';

type MyProps = {
  location: any,
  actions: any,
  data: Array<any>,
  getLists: any
}
class UserAdd extends Component<MyProps> {
  constructor(props: any) {
    super(props);
  }
  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    const param = this.props.location.state;
    return (
      <div>
        <button onClick={ this.props.getLists }>新增用户</button>
        {
          this.props.data.map((item) => {
            return <div key={item.pi_device_index_code}>{item.pi_pointname}</div>
          })
        }
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  data: state.lists
});
const mapActionToProps = (dispatch: any) => {
  return {
    getLists: () => dispatch(getLists())
  }
}
export default connect(mapStateToProps, mapActionToProps)(UserAdd);
