import React, { Component } from 'react';
import { connect } from 'react-redux';

type MyProps = {
  counter: number,
  clickCount: any,
  value: any,
  data: Array<any>
};
type MyState = { time: string };
class FirstComponent extends Component<MyProps, MyState> {
  timer: any;
  constructor(props: any) {
    super(props);
    this.state = {
      time: ''
    }
    this.timer = '';
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <div>{ this.props.counter }</div>
        <button className="square" onClick={ this.props.clickCount }>
          { this.state.time }
        </button>
        {
          this.props.data.map((item) => {
            return <div key={item.pi_device_index_code}>{item.pi_pointname}</div>
          })
        }
      </div>
    )
  };
}

const mapStateToProps = (state: any) => ({
  counter: state.counter,
  data: state.lists
})
export default connect(mapStateToProps)(FirstComponent);
