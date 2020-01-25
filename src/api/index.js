/* 包含n个接口请求函数的模块
    每个函数返回promise

    封装的意义：  因为接口有些数据method\url是固定的 封装好之后可以让调用者少传数据 
 
    模块暴露的方式 
    集体暴露 
    export default  {
        xxx()  {}
        yyy()  {}
    }

    分别暴露
    export xxx() {}
    export yyy() {}
    */

import ajax from './ajax'


/* 非箭头函数写法
export function reqLogin(username,password) {
    return ajax('/login',{username,password},'POST')
}
*/
//登录
export const reqLogin = (username,password) => ajax('/login',{username,password},'POST')

//添加用户
export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')
//更新用户

//获取所有用户列表


//删除用户


//获取一级或某个二级分类列表


//添加分类


//更新品类名称


//根据分类ID获取分类


//获取商品分页列表


//根据ID/Name搜索产品分类列表


//添加商品


//更新商品


//对商品进行上架/下架处理


//上传图片


//删除图片


//添加角色


//获取角色列表


//更新角色-给角色设置权限


//获取天气支持-支持jsonp

 