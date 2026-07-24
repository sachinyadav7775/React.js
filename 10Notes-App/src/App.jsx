import  { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (

    <div className="min-h-screen lg:flex bg-black text-white">
      {/* Form Section */}

      <form onSubmit={(e) => {submitHandler(e)}} className=" lg:w-1/2 items-start flex flex-col gap-4 p-10">
          
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full px-5 py-2 border-2 border-white rounded bg-transparent outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          placeholder="Write Details"
          className="w-full h-40 px-5 py-2 border-2 border-white rounded bg-transparent outline-none resize-none"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        ></textarea>

        <button type="submit" className="w-full px-5 py-2 bg-white text-black font-medium rounded cursor-pointer active:bg-gray-400 active:scale-95">
          Add Note
        </button>

      </form>

      {/* Notes Section */}
      <div className="w-full lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="mt-5 flex flex-wrap gap-5">
          {task.map(function(elem, idx){

            return <div key={idx} className=" flex justify-between flex-col items-start h-65 w-55 px-4 py-6 relative text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/684/small/sticky-note-paper-background-free-png.png')] rounded-2xl">
              <div>
                <h2 className="leading-tight text-xl font-bold">{elem.title}</h2>
                <p className="mt-2 leading-tight font-semibold text-gray-600">{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className="w-full bg-red-500 cursor-pointer active:bg-red-600 active:scale-95 text-white p-2 rounded font-bold">Delete</button>
            </div>
          })}
        </div>
      </div>

    </div>

  );

};

export default App;