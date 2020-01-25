## 项目笔记
npm run build   打包

npm install -g serve   
serve -s build 
-S就是--save的简写
-D就是--save-dev  这样安装的包的名称及版本号就会存在package.json的devDependencies这个里面，而--save会将包的名称及版本号放在dependencies里面。一个是开发依赖一个是生产依赖。

### 遇见的一些小问题  
- 代码补全失效  
@tag:usesOnlineServices   -->  Typescript
参考网址[简书，禁用Typescript检测](https://www.jianshu.com/p/179f16d43026)


###  src文件基本结构
- api       接口
- asserts   静态资源
- pages     路由组件
- components 组件
- utils     工具文件
- config    配置文件
- App.js    根组件
- index.js  入口文件


### 引入antd相关
参考网站[antd](https://ant.design/docs/react/use-with-create-react-app-cn)
yarn add react-app-rewired customize-cra babel-plugin-import 再配置一下
**react-app-rewired** （一个对 create-react-app 进行自定义配置的社区解决方案）
> rewired	英[ˌriːˈwaɪəd]
> 美[ˌriːˈwaɪərd]
> v.	给(建筑物或设备)换新电线;
#### 自定义主题
需要用到 less 变量覆盖功能。我们可以引入 customize-cra 中提供的 less 相关的函数 **addLessLoader** 来帮助加载 less 样式

### 引入路由
<BrowserRouter> <Route> <Switch>
几种路由的跳转
- <Redirect to="/xx"/>
- this.props.history.push()/replace()

### 路由配置
定义路由文件，在相应页面进行注册路由
定义config文件。menuConfig.js将路由逻辑单元抽离出来 更好修改和处理

### 引入reset  
重置样式
<link rel="stylesheet" href="/css/reset.css">
这里有个小坑 引入时路径不要加href="./css/reset.css"

### postman相关
save 建立集合 Import导入..
post请求 
Body    form-data带文件的表单 
        x-www-form-urlencoded 纯文本的表单
        raw binary 文件的


### ajax相关
封装axios
使用async 和 await简化promise的使用,不再使用then()来指定成功/失败的回调函数
以同步编码的方式来实现异步编程


### 配置代理处理跨域问题
- package.json
"proxy": "http://localhost:5000"
Access-Control-Allow-Origin
- 跨域方案
1. jsonp get
2. cors
3. 代理

### 维持登录与自动登录
优化登录  
- 在内存中缓存。  momoryUtils
- 浏览器缓存 localstorge 
  可以上github找一个store包简化操作
  Cross-browser storage for all use cases, used across the web.
  [github地址](https://github.com/marcuswestin/store.js)






