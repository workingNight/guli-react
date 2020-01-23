// 应用的根组件

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/admin/index';
import Login from './pages/login/index'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*里面的component不要大写*/}
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Admin} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
