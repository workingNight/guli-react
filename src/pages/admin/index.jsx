
import React, { Component } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

//注册路由
import Home from '../home' 
import Category from '../category'
import Product from '../product' 
import Role from '../role' 
import User from '../user' 
import Bar from '../charts/bar' 
import Line from '../charts/line' 
import Pie from '../charts/pie'

const { Footer, Content, Sider } = Layout

export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if (!user || !user._id) {
            return (
                <Redirect to="/login" />
            )
        } else {
            return (
                <Layout style={{height: '100%'}}>
                    <Sider ><LeftNav/></Sider>
                    <Layout>
                        <Header>HEADER</Header>
                        <Content style={{backgroundColor:'#fff'}}>
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/category' component={Category}/>
                                <Route path='/product' component={Product}/>
                                <Route path='/role' component={Role}/>
                                <Route path='/user' component={User}/>
                                <Route path='/charts/pie' component={Pie}/>
                                <Route path='/charts/line' component={Line}/>
                                <Route path='/charts/bar' component={Bar}/>
                                <Redirect to='/home'/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign:'center',color:'#aaaaaa'}}>推荐使用谷歌浏览器，获得更佳的浏览体验</Footer>
                    </Layout>
                </Layout>
            )
        }


    }
}

