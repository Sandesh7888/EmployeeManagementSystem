import React from 'react'
import Header from '../UI/Header'
import TaskListNumber from '../UI/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ props }) => {
  return (
    <div className='p-4'>
        <Header />
        <TaskListNumber />
        <TaskList data={props.data} />
        
      
    </div>
  )
}

export default EmployeeDashboard
