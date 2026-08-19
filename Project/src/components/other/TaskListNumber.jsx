import React from 'react'

const TaskListNumber = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-6 sm:mt-10">

            <div className="w-full px-4 sm:px-6 md:px-9 py-5 sm:py-6 bg-sky-400 rounded-xl">
                <h1 className="text-2xl sm:text-3xl font-semibold">1</h1>
                <h2 className="text-base sm:text-xl font-medium">New Task</h2>
            </div>

            <div className="w-full px-4 sm:px-6 md:px-9 py-5 sm:py-6 bg-green-400 rounded-xl">
                <h1 className="text-2xl sm:text-3xl font-semibold">3</h1>
                <h2 className="text-base sm:text-xl font-medium">Completed Task</h2>
            </div>

            <div className="w-full px-4 sm:px-6 md:px-9 py-5 sm:py-6 bg-yellow-400 rounded-xl">
                <h1 className="text-2xl sm:text-3xl font-semibold">4</h1>
                <h2 className="text-base sm:text-xl font-medium">Accepted Task</h2>
            </div>

            <div className="w-full px-4 sm:px-6 md:px-9 py-5 sm:py-6 bg-red-400 rounded-xl">
                <h1 className="text-2xl sm:text-3xl font-semibold">0</h1>
                <h2 className="text-base sm:text-xl font-medium">Failed Task</h2>
            </div>

        </div>
    )
}

export default TaskListNumber