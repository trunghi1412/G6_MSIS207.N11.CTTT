import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './cart.css'
import Header from "../header/Header"
import Announcement from '../Assest/Announcement'

const Cart = (item) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    alert('Added to cart.')
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    fetch('http://localhost:2000/api/getproduct')
    .then(res => res.json())
    .then(res => {
      setProducts(res)
    })
  },[]) 
    
    return (
      <div>
      <Announcement/>
      <Header/>
        <div className='shopping-cart'>
          <p className='product-p-title'>GROUP6.FIG</p>
          <ul className='cart__list' >
           {
            products.map((product, index) => {
              if((page - 1) * 15 < index && index <= (page * 15)) return (
                <li className='cart__list-item'>
                <img src={product.image} alt="igm product" className='cart__img' />
                    <div className='content'>
                      <p className='p-name'>
                        {product.name}
                      </p>
                      <p className='price'>Price: {product.price} VND</p>
                      <p className='quantity'>Quantity: {product.quantity}</p>
                        <div className='bt-product-page'>
                        <button className='add-tc' onClick={() => handleClick(product)}>Add to Cart</button>
                        <button className='det-tc'>More Detail</button>
                      </div>   
                </div>
             </li>
              )
            })
           }
          </ul>
            <div className='page-stt'>
              <button  onClick={()=> setPage(1)} className='num-page'>1</button>
              <button onClick={() => setPage(2)} className='num-page'>2</button>
              <button onClick={() => setPage(3)} className='num-page'>3</button>
              <button onClick={() => setPage(4)} className='num-page'>4</button>
 
            </div>
          </div> 
        </div>
    )
}

export default Cart