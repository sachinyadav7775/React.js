import React, { useState } from 'react'

const CreateTask = () => {

    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const [newtask, setNewTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask(
            {
                active:false,
                newTask:true,
                completed: false,
                false:false,
                taskTitle,
                taskDate,
                category,
                taskDescription
            }
        )
        const data = JSON.parse(localStorage.getItem('employees'))
        
        data.forEach(function(elem){
            if(asignTo == elem.name) {
                elem.tasks.push(newtask)
                elem.taskCounts.newTask = elem.taskCounts.newTask+1
            }
        })
        console.log(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setAsignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>

            <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }} 
                className='w-full flex flex-wrap items-start justify-between md:flex-row'
            >
                <div className='w-full md:w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'  placeholder='Detailed description of task(Max 500 word)'
                    ></textarea>
                    <button className='w-full px-5 py-3 mt-4 text-sm rounded cursor-pointer bg-emerald-700 hover:bg-emerald-600'>Create Task</button>    
                </div>

            </form>

        </div>
    )
}

export default CreateTask