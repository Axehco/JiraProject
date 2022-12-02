# Jira

## 1. 安装库

```javascript
// json-server 全局安装
npm install -g json-server
yarn add json-server -D

// qs库
yarn add qs

// qs的typescript的定义文件
yarn add @types/qs -D
```

  

## 2. 项目初始化与配置

项目安装

```
npx create-react-app jira --template typescript
```

- 绝对路径问题

修改文件引入时的绝对路径设置 `tsconfig.json`

```
"baseUrl": "./src",  // 绝对路径会去src下寻找
```

- Prettier 

格式化配置：Prettier ： [Prettier官网](https://prettier.io/)

[安装链接](https://prettier.io/docs/en/install.html)

```
yarn add --dev --exact prettier
```

新建一个配置文件

```
echo {}> .prettierrc.json
```

再建一个 `.prettierignore`

```
# Ignore artifacts:
build
coverage
```

自动格式化：借助 `Pre-commit Hook`  [链接](https://prettier.io/docs/en/precommit.html#docsNav)

```
npx mrm@2 lint-staged
```

再在`package.json`中添加`ts, tsx`

```
"lint-staged": {
  "*.{js,css,md,ts,tsx}": "prettier --write"
}
```

和eslint有冲突： [eslint链接](https://prettier.io/docs/en/install.html#eslint-and-other-linters)

```
yarn add eslint-config-prettier -D
```

安装完成后，打开`package.json`，然后配置：

```
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "prettier"
  ]
},
```

这就是说我们用prettier的规则覆盖了原来的规则。这样就可以保证prettier可以和原来的eslint可以互相正常工作。

- commitlint  **这个代码提交管理的，不建议安装。**

`commitlint`主要是去检查每次提交的commit message是否是符合规范的。 [commitlint](https://github.com/conventional-changelog/commitlint)

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

### 常见的mock方案

1. 代码侵入(直接在代码中写死 Mock数据,或者请求本地的JSON文件)。无优点。和其他方案比Mock效果不好，与真实Server环境的切换非常麻烦，一切需要侵入代码切换环境的行为都是不好的。

2. 请求拦截 Mock.js 原理重写xml,httprequest的一些属性。
   - 优点：与前端代码分离、可生成随机数掘
   - 缺点：数据都是动态生成的假数据，无法真实模拟增删改查的情况。只支持ajax不支持fetch
3. 接口管理工具 rap, swagger,moco, yapi
   - 优点：配置功能强大，接口管理与Mock一体，后端修改接口Mock也跟着更改，可靠
   - 缺点：配置复杂，依赖后端，可能会出现后端不愿意出手，或者等配置完了，接口也开发出来了的情况。一般会作为大团队的基础建设而存在，没有这个条件的话慎重考虑。
4. 本地node服务器 json-server
   - 优点：配置简单，json-server甚至可以0代码30秒启动一个REST API Server；自定义程度高，一切尽在掌控中；增删改查真实模拟
   - 缺点：与接口管理工具相比，无法随着后端API的修改而自动修改

**REST API** ： —句话总结:URI 代表 资源/对象，METHOD 代表 行为

put是全量替换，整个的替换；patch是修改其中的一部分属性。

![image-20221129121647183](https://picgo-1302043117.cos.ap-nanjing.myqcloud.com/jiraproject/image-20221129121647183.png)

[json server github](https://github.com/typicode/json-server)

```
// 全局安装
npm install -g json-server

yarn add json-server -D
```

创建一个db.json，写入：

```
{"users":[]}
```

启动：

```
json-server --watch db.json
```

这里可以安装postman来测试。

在package.json中去配置；

```
"json-server": "json-server __json__server__mock__/db.json --watch"
```

这样就可以用npm run json-server直接开启服务器了。

## 3. 实现项目列表

`src/screens/project-list/search-panel.jsx` 和 `src/screens/project-list/list.jsx` 组件是两个兄弟组件，但是`list`的信息是定义在`search-panel`中的，这里使用状态提升，将状态和操作都提升到父组件里面，在通过父组件将数据流到list组件里面。

这里后端返回的只是一个`personId`，所以也要提升 `const [users, setIsers] = useState([])` 到父组件里面去，再通过`props`传值给子组件，这里是函数写法，通过参数来接收，再渲染。

```react
<td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
```

里面的` ? `主要判断，看`find`返回的是不是`undefined`。



```
yarn add qs
```

可以将一个get请求的params参数转化为 key=xxx&key=xxx的形式。



关于自定义hook

```react
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}
```

这里的 useMount 是不能去点use的，没有use，eslint会认为不是一个hook，不管是系统自带的hook还是我们自己写的：都是不可以在普通函数中运行的。

只能在：

1. 其他hook中运行
2. 组件中运行



在文本框中输入 ”骑手管理“ 会发很多请求，这不太好，所以要解决。

![image-20221129224313980](https://picgo-1302043117.cos.ap-nanjing.myqcloud.com/jiraproject/image-20221129224313980.png)

解决：debounce 防抖，多次高频率的请求，只执行最后一次。

案例：

![image-20221129224502659](https://picgo-1302043117.cos.ap-nanjing.myqcloud.com/jiraproject/image-20221129224502659.png)

解释：

![image-20221129224744452](https://picgo-1302043117.cos.ap-nanjing.myqcloud.com/jiraproject/image-20221129224744452.png)



使用JS，大部分错误都是在runtime的时候发现的。



d.ts是给ts打补丁用的



form表单里面，onSubmit的类型为：`HTMLFormElement` 是继承于 `Element`的



ts是鸭子类型（duck typing），面向接口编程，而不是面向对象编程。



## 5. 登录相关

`__json__server__mock__/middleware.js` 这个里面，主要是自己模拟登录验证，需要在`package.json`里面配置：

```
"json-server": "json-server __json__server__mock__/db.json --watch --port 3001 --middlewares __json__server__mock__/middleware.js"
```

才能运行生效。

```js
module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    console.log(req.body.username, req.body.password)
    if (req.body.username === 'jack' && req.body.password === '123456') {
      return res.status(200).json({
        user: {
          token: '123'
        }
      })
    } else {
      return res.status(400).json({message: '用户名或密码错误！'})
    }
  }
  next()
}
```

工具安装 [jira-dev-tool发布官网](https://www.npmjs.com/package/jira-dev-tool)

命令：

```
npm i jira-dev-tool
```





















