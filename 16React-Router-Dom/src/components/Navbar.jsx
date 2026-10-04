import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav bg-slate-900'>
      <h3>@Sachin_sky</h3>
      <div>
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link> 
        <Link className="nav-link" to="/product">Product</Link> 
      </div>
    </div>
  )
}

export default Navbar