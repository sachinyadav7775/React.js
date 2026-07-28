import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navber2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
 
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Navber2