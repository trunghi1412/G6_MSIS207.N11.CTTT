import React from 'react'
import logo from "../assets/images/bt.jpg"
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
            <div className='box'>
                <div className='logo_width'>
                    <img src={logo} alt=''/>
                </div>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Service</h2>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Payment Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Central System - Bookstore</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Exchange - Return - Refund Policy</li>
              <li>Warranty Policy - Refund</li>
              <li>Track Your Order </li>
              <li>How To Buy </li>
              <li>Shipping Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>My Account</h2>
            <ul>
              <li>Login / Create New Account</li>
              <li>Change Customer Address</li>
              <li>Account Details</li>
              <li>Purchase History</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
