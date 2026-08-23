import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="h-screen p-15 bg-[#1C1C1C]">
      <Header data={data} />

      <TaskListNumber data={data} />

      <TaskList data={data} />

    </div>
  )
}

export default EmployeeDashboard
