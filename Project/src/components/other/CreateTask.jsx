import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        if (
            !assignTo ||
            !category ||
            !taskDate ||
            !taskTitle ||
            !taskDescription
        ) {
            alert("Please fill all fields")
            return
        }

        if (!userData) return

        const employee = userData.find(
            (elem) =>
                elem.name.toLowerCase() === assignTo.trim().toLowerCase()
        )

        if (!employee) {
            alert("Employee not found")
            return
        }

        const newTask = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDate,
            category,
            taskDescription
        }

        const updatedData = userData.map((elem) => {
            if (elem.id === employee.id) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                }
            }

            return elem
        })

        localStorage.setItem(
            "employees",
            JSON.stringify(updatedData)
        )

        setUserData(updatedData)

        setTaskTitle("")
        setAssignTo("")
        setCategory("")
        setTaskDate("")
        setTaskDescription("")

        alert("Task created successfully")
    }

    return (
        <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
            <form
                onSubmit={submitHandler}
                className="w-full flex flex-wrap items-start justify-between md:flex-row"
            >
                <div className="w-full md:w-1/2">

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">
                            Task Title
                        </h3>

                        <input
                            value={taskTitle}
                            onChange={(e) =>
                                setTaskTitle(e.target.value)
                            }
                            className="w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI Design"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">
                            Date
                        </h3>

                        <input
                            value={taskDate}
                            onChange={(e) =>
                                setTaskDate(e.target.value)
                            }
                            className="w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="date"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">
                            Assign To
                        </h3>

                        <input
                            value={assignTo}
                            onChange={(e) =>
                                setAssignTo(e.target.value)
                            }
                            className="w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="employee name"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">
                            Category
                        </h3>

                        <input
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="w-full md:w-4/5 px-2 py-1 text-sm rounded outline-none bg-transparent border border-gray-400 mb-4"
                            type="text"
                            placeholder="design, dev, etc"
                        />
                    </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">
                        Description
                    </h3>

                    <textarea
                        value={taskDescription}
                        onChange={(e) =>
                            setTaskDescription(e.target.value)
                        }
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
                        placeholder="Detailed description of task"
                    />

                    <button
                        type="submit"
                        className="w-full px-5 py-3 mt-4 text-sm rounded cursor-pointer bg-emerald-700 hover:bg-emerald-600 active:scale-95"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask