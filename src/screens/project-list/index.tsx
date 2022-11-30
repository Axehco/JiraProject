import React from "react";
import { useState } from "react"
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import { cleanObject, useMount, useDebounce } from 'utils/index'
// import qs from 'qs'
import * as qs from 'qs'

const apiURL = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  // 这里使用自定义的 useDebounce 这个hook
  const debouncedParam = useDebounce(param, 300)
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  React.useEffect(() => {
    // qs.stringify会转化为name=XXX&personId=XXX &personId=${param.personId}
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])  // param改变的时候去获取

  // useMount用了后，就不需要这个奇怪的空数组了
  useMount(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })  

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}