import { useCallback, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "@$#&%?!*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length, number, character]);


  return (
    <div className='min-h-screen w-full bg-black flex justify-center'>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 mt-8 bg-gray-600 absolute '>

        <h1 
          className='text-4xl text-center text-orange-500'>
          password Generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text" 
            value={password} 
            placeholder="Password"
            className='outline-none w-full px-3 py-1 bg-white'
            readOnly
          />

          <button className='outline-none px-3 py-1 bg-blue-600'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={7}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              className='cursor-pointer'
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={character}
              id='characterInput'
              className='cursor-pointer'
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default App