import React from 'react'


const TaskList = () => {
  return (
    <div id='TaskList'className=' overflow-scroll hide-scrollbar w-full mt-10 flex gap-5 justify-start items-center h-55 flex-nowrap '>
        <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0  p-5 ' >     
          <div className='flex justify-between items-center'>
            <h3 className='text-sm font-bold px-3 py-1 bg-red-600 rounded'>High</h3>
            <h4 className="text-sm">23 jan 2025</h4>

          </div>
          <h2 className='mt-5 text-2xl font-semibold'>make project</h2>  
          <p className="text-sm mt-2">
            This is a sample task. You can add your own task here. This is a sample task

          </p>     
        </div>
        
      
    </div>
  )
}

export default TaskList
