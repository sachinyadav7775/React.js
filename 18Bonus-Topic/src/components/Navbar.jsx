import React from 'react'

const Navbar = (props) => {

    function chengeTheme() {
        props.setTheme('Dark')
    }

  return (
    <div>
        <button onClick={chengeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar