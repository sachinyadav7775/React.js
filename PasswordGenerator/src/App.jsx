import { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "@$#&%?!*/";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length, number, character, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    <div className='min-h-screen bg-black flex justify-center text-center'>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 mt-8 bg-gray-800 absolute'>

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Password Generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text" 
            value={password} 
            placeholder="Password"
            className='outline-none w-full px-3 py-1 bg-white'
            readOnly
            ref={passwordRef}
          />

          <button 
            className='outline-none px-3 py-1 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold cursor-pointer'
            onClick={copyPassword}
          >
            Copy
          </button>

        </div>

        <div className='flex flex-wrap text-sm gap-4 mb-2 text-amber-400'>

          <div className='flex items-center gap-x-2'>
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

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
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
              checked={character}
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