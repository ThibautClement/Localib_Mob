import React from 'react'
import logo from '../assets/img/localib.png'
import '../assets/style/Navbar.css'

const Nav = (props : any) => {
  return (
    <section>
        <div className='navbar'>
          <img src={logo} className='logo' alt="logo" />
          <div className='titleBox'>
            <div className='title'>{props.data}</div>
          </div>
        </div>
    </section>
  )
}

export default Nav