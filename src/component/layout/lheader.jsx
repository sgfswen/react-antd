import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const { Header } = Layout;

/**
 * 公共头部
 *
 * @export
 * @class Lheader
 * @extends {Component}
 */
export class Lheader extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	toggle = () => {
		this.props.toggle(!this.props.collapsed);
  	}
  	logout= (e) => {
  		// 模拟退出
  		if(e.key == 'logout') {
	 		delete localStorage.token;
	  		window.location.reload();
  		}
  	}
	render() {
		return (
			<Header className="layout-header">
	            <Icon
	              className="trigger"
	              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
	              onClick={this.toggle}
	            />
	            <Menu
			        mode="horizontal" onClick={this.logout} className="layout-header-menu"
			    >
		        <SubMenu title={<span><Icon type="user" />sosout</span>}>
		        	<Menu.Item key="logout">注销</Menu.Item>
		        </SubMenu>
			    </Menu>
	        </Header>
		)
	}
}