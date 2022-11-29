import React from "react";
import { useState } from "react"
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import qs from 'qs'
import { cleanObject } from 'utils/index'

const apiURL = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  React.useEffect(() => {
    // qs.stringify会转化为name=XXX&personId=XXX &personId=${param.personId}
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])  // param改变的时候去获取

  React.useEffect(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [param])  // param改变的时候去获取

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}