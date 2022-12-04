import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'


const Header = () => {
  
  return (
      <div className='header'>
        
        <div className='logo'> Hirito </div>

        <nav className="navbar">
        <NavLink to='/homepage' onClick={this} className='home-btn'> Home </NavLink>
        <NavLink to='/intro' onClick={this} className='intro-btn'> Introduction </NavLink>
          <NavLink to='/cart' onClick={this} className='product-btn'> Product </NavLink>
          
          <NavLink to='/blog' onClick={this} className='blog-btn'> Blog </NavLink>
          <a href="contact">Contact</a>
        </nav>

        <div className='icons'>
         
          <FaSearch className='icon-search' id='search-button'/>
          <FaShoppingCart className='icon-cart' id='cart-button'/>
          
          <NavLink to='/login' onClick={this} ><FaUser  className='icon-user' id='login-button'/></NavLink>
        </div>

        <form action="" className='search-something'>
          {/* <input type="search" id='search-box' placeholder='search figure...'/> */}
          
        </form>
        
      </div>


  )
}

export default Header