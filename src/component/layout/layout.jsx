import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { config } from '../../config/config';
import { template } from '../common/mixin'; 
// 公共头部
import { Lheader } from './lheader';
// 公共菜单
import { Lmenu } from './lmenu';
// 公共底部
import { Lfooter } from './lfooter';

// 底部样式
import '../../style/layout.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			collapsed: false,
    		mode: 'inline'
		};
	}
	onCollapse = (collapsed) => {
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
	}
	toggle = (collapsed) => {
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
  	}
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
		return (
		<Layout className="layout">
	        <Sider
	          collapsible
	          collapsed={this.state.collapsed}
	          onCollapse={this.onCollapse}
	        >
	        <div className="layout-logo">
	        	<Link to="/">
		        	<img className="logo-img" src={config.logoSrc} />
		        	<span className="logo-text">{config.logoText}</span>
	        	</Link>
	        </div>
	        <Lmenu mode={ this.state.mode } />
	        </Sider>
	        <Layout>
	          <Lheader collapsed={this.state.collapsed} toggle={ collapsed => this.toggle(collapsed) } />
	          <Content className="layout-content">
	           	{this.props.children}
	          </Content>
	          <Lfooter />
	        </Layout>
	    </Layout>
		);
	}
}

export default template({
	id: 'index', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});