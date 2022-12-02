module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    console.log(req.body.username, req.body.password)
    if (req.body.username === 'q' && req.body.password === 'q') {
      return res.status(200).json({
        "user": {
          id: 2,
          name: '张三',
          email: 'iloveyou@gmail.com',
          title: '今天下雨了吗？',
          organization: 'DLUT',
          token: '===xgboostivskl==='
        }
      })
    } else {
      return res.status(400).json({ message: '用户名或密码错误！' })
    }
  }
  next()
}