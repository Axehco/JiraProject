module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    console.log(req.body.username, req.body.password)
    if (req.body.username === 'admin' && req.body.password === '123456') {
      return res.status(200).json({
        "user": {
          id: 1,
          name: '张三',
          email: 'iloveyou@gmail.com',
          title: '今天下雨了吗？',
          organization: 'DLUT',
          token: '===xgboostivskl==='
        },
        // "user": [
        //   {
        //     id: 1,
        //     name: '张三',
        //     email: 'iloveyou@gmail.com',
        //     title: '今天下雨了吗？',
        //     organization: 'DLUT',
        //     token: '===xgboostivskl==='
        //   },
        //   {
        //     id: 2,
        //     name: '李四',
        //     email: 'youarebob@qq.com',
        //     title: '学习react',
        //     organization: 'GZU',
        //     token: 'fsdh5234fdhfgfdg==='
        //   }
        // ],
        // "projects": {
        //   id: 1,
        //   name: '长江大桥项目'
        // }
      })
    } else {
      return res.status(400).json({ message: '用户名或密码错误！' })
    }
  }
  next()
}