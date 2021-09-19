import { useState, useEffect } from 'react'
import SeacthPanel from './search-panel'
import List from './list'
import axios from 'axios'
const apiURL = 'http://localhost:3001'
console.log('apiURL :>> ', apiURL)
const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get(`${apiURL}/projects`).then(res => {
      if (res.data.ret === 200) {
        setList(res.data.data)
      }
    })
  }, [param])
  useEffect(() => {
    axios.get(`${apiURL}/users`).then(res => {
      if (res.data.ret === 200) {
        setUsers(res.data.data)
      }
    })
  }, [])
  return (
    <div>
      <SeacthPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SeacthPanel>
      <List users={users} list={list}></List>
    </div>
  )
}

export default ProjectList
