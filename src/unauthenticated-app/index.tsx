import React, { useState } from "react";
import {LoginScreen} from 'unauthenticated-app/login'
import {RegisterScreen} from 'unauthenticated-app/register'

export const UnauthenticatedApp = () => {
  // 默认是登录界面，false
  const [isRegister, setIsRegister] = useState(false);
  // console.log('@', isRegister)
  return (
    <div>
      {
        isRegister ? <LoginScreen></LoginScreen> : <RegisterScreen></RegisterScreen>
      }
      <button onClick={() => setIsRegister(!isRegister)}>{isRegister ? "没有账号？注册新账号" : "已经有账号了？直接登录"}</button>
    </div>
  )
}