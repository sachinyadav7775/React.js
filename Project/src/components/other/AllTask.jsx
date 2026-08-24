import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className="bg-[#1C1C1C] p-3 sm:p-5 mt-5 rounded">
            
            {/* Table wrapper - mobile par horizontal scroll */}
            <div className="overflow-x-auto">
                <div className="min-w-[700px]">

                    {/* Header */}
                    <div className="bg-gray-400 mb-2 px-4 py-2 rounded flex justify-between">
                        <h2 className="text-sm sm:text-lg font-medium w-[30%]">
                            Employee Name
                        </h2>

                        <h3 className="text-sm sm:text-lg font-medium w-[17.5%] text-center">
                            New Task
                        </h3>

                        <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center">
                            Active Task
                        </h5>

                        <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center">
                            Completed
                        </h5>

                        <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center">
                            Failed
                        </h5>
                    </div>

                    {/* Employee List */}
                    <div id="Alltask" className="max-h-55 overflow-y-auto">

                        {userData.map((elem) => {
                            return (
                                <div
                                    key={elem.id}
                                    className="border-2 border-emerald-600 hover:border-emerald-500 mb-2 px-4 py-2 rounded flex justify-between items-center"
                                >
                                    <h2 className="text-sm sm:text-lg font-medium w-[30%]">
                                        {elem.name}
                                    </h2>

                                    <h3 className="text-sm sm:text-lg font-medium w-[17.5%] text-center text-blue-600">
                                        {elem.taskCounts.newTask}
                                    </h3>

                                    <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center text-yellow-300">
                                        {elem.taskCounts.active}
                                    </h5>

                                    <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center text-green-600">
                                        {elem.taskCounts.completed}
                                    </h5>

                                    <h5 className="text-sm sm:text-lg font-medium w-[17.5%] text-center text-red-600">
                                        {elem.taskCounts.failed}
                                    </h5>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

            {/* Mobile hint */}
            <p className="text-gray-400 text-xs mt-2 sm:hidden">
                ← Swipe left/right to see all tasks →
            </p>

        </div>
    )
}

export default AllTask