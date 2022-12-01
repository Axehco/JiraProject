import React, { FormEvent } from 'react'

export const LoginScreen = () => {
  const login = (param: {username: string, password: string}) => {
    
  }

  /* const login = (param: {username: string, password: string}) => {
    fetch(`${apiURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(
      async response => {
        if (response.ok) {
          
        }
    })
  } */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value
    login({username, password})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">用户名</label>
        <input type="password" id={'password'} />
      </div>
      {/* <button type='submit'>登录</button> */}
      <button type='submit'>注册</button>
    </form>
  )
}