import Navber2 from './Navber2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navber = () => {

  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h1>@Sachin_SKY</h1>
      <Navber2/>
    </div>
  )
}

export default Navber