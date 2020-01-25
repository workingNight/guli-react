import React, { Component } from 'react';
import { Form, Input, Button, Icon, message } from 'antd'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './login.less'   /* 引入less文件 */
import logo from '../../asserts/images/logo.png'

/* 关于要不要写大括号---集体暴露就不用写大括号 分别暴露就要写{} */
import { reqLogin } from '../../api'

const Item = Form.Item;  /* 不能写在Import之前 */




/* 登录的路由组件 */
class Login extends Component {

    handleSubmit = (event) => {
        /* 阻止事件的默认行为,阻止默认的提交，自己用ajax提交 */
        event.preventDefault()

        //对所有的表单字段进行校验
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { username, password } = values
                const result = await reqLogin(username, password)
                console.log('请求成功' + result)
                if (result.status === 0) {//登录成功
                    //提示登录成功
                    message.success('登录成功')

                    //保存user
                    const user = result.data;
                    memoryUtils.user = user  //保存在内存中
                    storageUtils.getUser(user) //保存在缓存中

                    this.props.history.replace('/')
                } else {//登录失败
                    message.error(result.msg)
                }
            } else {
                console.log('校验失败！');
            }
        })

        // const form = this.props.form
        // const values = form.getFieldsValue()
        /* 注意细节
        getFieldsValue	获取一组输入控件的值，如不传入参数，则获取全部组件的值
        getFieldValue	获取一个输入控件的值 */
    }

    /* 
    对密码进行自定义验证
    */
    validator = (rule, value, callback) => {
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码长度不能小于4位')
        } else if (value.length > 12) {
            callback('密码长度不能大于12位')
        } else if (!/^[0-9A-Za-z_]+$/.test(value)) {
            callback('密码必须是英文，数字或下划线组成')
        } else {
            callback() //验证通过
        }
    }

    render() {
        /* 具有强大功能的form对象 */
        const form = this.props.form;
        const { getFieldDecorator } = form;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>尚硅谷： 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {/* 高阶函数getFieldDecorator('username'，{规则})(组件) */}
                            {
                                getFieldDecorator('username', {
                                    /* 声明式验证，直接使用别人定义好的验证规则进行验证 */
                                    rules: [
                                        { require: true, whitespace: true, message: '用户名必须输入' },
                                        { min: 4, message: '用户名至少4位' },
                                        { max: 12, message: '用户名最多12位' },
                                        { pattern: /^[0-9A-Za-z_]+$/, message: '用户名必须是下划线、英文或数字组成' },
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator: this.validator
                                        }
                                    ]

                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Item>
                        <Item>
                            {/*htmlType="submit" 提交按钮  */}
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/* 包装Login组件 生成一个新的组件： Form(Login)
新的组件会向Login组件传递一个强大的对象from  在props里面
*/
const WrapLogin = Form.create()(Login)
export default WrapLogin    /* Form(Login) */
/*
1. 前台表单验证
2. 收集表单输入数据
*/


/*
1. 高阶函数
    a.接受的参数或返回值是函数。
    b.常见（定时器，promise,数组的很多函数foreach()/filter()/map()/reduce()/findIndex(),bind()
高阶函数更具有动态扩展性
2. 高阶组件
- 本质上还是一个函数
- 接受一个组件，返回一个新的包装组件，包装组件会想被包装组件传入特定属性
- 拓展组件的功能
- 高阶组件也是高阶函数，接收一个组件函数，会的是一个新的组件函数
 */