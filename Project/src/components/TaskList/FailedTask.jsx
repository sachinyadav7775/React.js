import React from "react"

const FailedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {data.category}
        </h3>

        <h4>{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>

      <div className="mt-4">
        <button className="w-full bg-red-600 border-none rounded py-2 px-2 text-sm">
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask
