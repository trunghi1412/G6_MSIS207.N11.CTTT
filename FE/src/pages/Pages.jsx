import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home/Home'
import Wrapper from '../components/wrapper/Wrapper'

const pages = ({productItems, cartItem, addToCart}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems}  addToCart = {addToCart}/>
      <Wrapper />
    </>
  )
}

export default pages
