import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/action/sidebar';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import menuData from '../../menu';
import routerData from '../../router/routerData';
import renderRoutes from '../../router/react-router-config';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

type MyProps = {
  actions: any,
  collapsed: boolean
}
interface MyState {
  collapsed: boolean,
  selectedKey: string
}
class SiderDemo extends React.Component<MyProps, MyState> {
  readonly state: Readonly<MyState> = {
    collapsed: false,
    selectedKey: '/about/userIndex',
  };
  static getDerivedStateFromProps (props: any, state: any) {
    if (props.collapsed !== state.collapsed) {
      const state1 = SiderDemo.setMenuOpen(props);
      return {
        ...state1
      }
    }
    return null;
  }
  static setMenuOpen = (props: any) => {
    const { pathname } = props.location;
    return {
      selectedKey: pathname
    };
  }
  componentDidMount() {
    const state = SiderDemo.setMenuOpen(this.props);
    this.setState(state);
  }
  toggle = () => {
    if (this.props.collapsed === true) {
      this.props.actions.EXPAND();
    } else {
      this.props.actions.COLLAPSED();
    }
  }
  menuClick(e: any) {
    this.setState({
      selectedKey: e.key
    });
  }
  /**
   *  获取一级菜单或者二级菜单
   */
  getSubMenuOrItem = (item: any, index: number) => {
    if (item.children && item.children.some((child: any) => child.name)) {
      // const childrenItems = this.getNavMenuItems(item.children);
      // if (childrenItems && childrenItems.length > 0) {
      //   return (
      //     <SubMenu
      //       key={index}
      //       title={
      //         <span className="ice-menu-collapse-hide">{item.name}</span>
      //       }
      //     >
      //       {childrenItems}
      //     </SubMenu>
      //   );
      // }
      return null;
    } else {
      return (
        <Menu.Item key={item.path} onClick={(e) => this.menuClick(e)}>
          <Link to={item.path}>
            <span className="ice-menu-collapse-hide">{item.name}</span>
          </Link>
        </Menu.Item>
      );
    }
  }
  render() {
    const auth = true;
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={ this.props.collapsed }
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[this.state.selectedKey]}>
            {
              menuData.map((item, index) => {
                return this.getSubMenuOrItem(item, index);
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={ this.toggle }
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100%'}}>
            {
              renderRoutes(routerData, auth)
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = (state: any) => ({
    collapsed: state.sidebar
});
const mapActionToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapActionToProps)(SiderDemo);
