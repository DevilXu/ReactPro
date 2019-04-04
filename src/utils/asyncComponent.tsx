import React, { Component } from "react";
import { any } from "prop-types";

interface MyStates { component: any };
export default function asyncComponent(importComponent: any) {
  class AsyncComponnet extends Component<{}, MyStates> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      })
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    };
  }
  return AsyncComponnet;
};