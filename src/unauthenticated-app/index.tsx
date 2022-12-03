import React, { useState } from "react";
import { LoginScreen } from 'unauthenticated-app/login'
import { RegisterScreen } from 'unauthenticated-app/register'
import { Card } from 'antd'

export const UnauthenticatedApp = () => {
  // 默认是登录界面，false
  const [isRegister, setIsRegister] = useState(false);
  // console.log('@', isRegister)
  return (
    <div style={{ display: 'flex', justifyContent: 'cneter' }}>
      <Card>
        {
          isRegister ? <LoginScreen></LoginScreen> : <RegisterScreen></RegisterScreen>
        }
        <button onClick={() => setIsRegister(!isRegister)}>{isRegister ? "没有账号？注册新账号" : "已经有账号了？直接登录"}</button>
      </Card>
    </div>
  )
}