import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#000")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-blue-100 px-4 py-4 rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "blue"}}>Blue</button>
          <button onClick={() => setColor("grey")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "grey"}}>Grey</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "White"}}>White</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "green"}}>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "yellow"}}>yellow</button>
        </div> 
      </div>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-blue-100 px-4 py-4 rounded-xl'>
          <button onClick={() => setColor("skyblue")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "skyblue"}}>skyblue</button>
          <button onClick={() => setColor("fuchsia")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "fuchsia"}}>fuchsia</button>
          <button onClick={() => setColor("deeppink")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "deeppink"}}>deeppink</button>
          <button onClick={() => setColor("cadetblue")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "cadetblue"}}>cadetblue</button>
          <button onClick={() => setColor("springgreen")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "springgreen"}}>springgreen</button>
          <button onClick={() => setColor("greenyellow")} className='outline-none px-4 py-4 rounded-xl cursor-pointer shadow-lg font-bold' style={{background: "greenyellow"}}>greenyellow</button>
        </div>
      </div>

    </div>
  )
}

export default App