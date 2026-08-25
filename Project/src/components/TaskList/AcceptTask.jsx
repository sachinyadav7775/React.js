import React from "react"

const AcceptTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5">

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

      <div className="flex gap-2 mt-4">

        <button
          type="button"
          className="flex-1 bg-green-600 hover:bg-green-700 py-2 px-2 text-sm rounded cursor-pointer"
        >
          Mark Completed
        </button>

        <button
          type="button"
          className="flex-1 bg-red-600 hover:bg-red-700 py-2 px-2 text-sm rounded cursor-pointer"
        >
          Mark Failed
        </button>

      </div>

    </div>
  )
}

export default AcceptTask