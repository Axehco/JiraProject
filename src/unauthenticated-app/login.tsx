import { useAuth } from 'context/auth-context'
import React, { FormEvent } from 'react'

export const LoginScreen = () => {
  const {login, user} = useAuth()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value
    login({username, password})
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* {
        user ? 
        <div>
          <div>{user.id}</div>
          <div>{user?.name}</div>
          <div>{user.email}</div>
          <div>{user.organization}</div>
          <div>{user.token}</div>
        </div> 
        : null
      } */}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">用户名</label>
        <input type="password" id={'password'} />
      </div>
      <button type='submit'>登录</button>
    </form>
  )
}