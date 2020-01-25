/* 
包含多个操作loaclStorage的工具函数的模块
setItem()
getItem()
removeItem()
loaclStorage只能保存string,如果传递是对象，会自动调用对象的toString()方法进行保存
loaclStorage -setItem保存的必须是对象的json串  用json.stringify()保存。
*/

const USER_KEY = 'user_key';
export default {
    //保存用户
    saveUser(user) {
        localStorage.setItem(USER_KEY,JSON.stringify(user))
    },

    //读取用户
    getUser() {  //如果存在需要返回的是对象，如果没有值，就返回{}
        return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    },

    //删除用户
    removeUser() {
        localStorage.removeItem(USER_KEY)
    }
}