import React from 'react'
import "./carts.css"

const Carts = ({CartsItem, addToCarts, decreaseQty} ) => {

    const totalPrice = CartsItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='Carts-items'>
        <div className='container d_flex'>
            <div className='Carts-details'>{CartsItem.length === 0 && <h1 className='no-items product'>No Items are add in Carts
</h1>}
                    
            {CartsItem.map((item) => {
                        const productQty = item.price * item.qty
                        return (
                            <div className='Carts-list product d_flex'>
                                <div className='img'>
                                    <img src={item.cover} alt=''/>
                                </div>

                                <div className='Carts-details'>
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}.00 * {item.qty}
                                    <span>${productQty}..00</span>
                                    </h4>
                                </div>

                                <div className='Carts-items-function'>
                                    <div className='removeCarts'>
                                        <button>
                                            <i className='fa-solid fa-xmark'></i>
                                        </button>
                                    </div>

                                    <div className='CartsControl d_flex'>
                                        <button className='incCarts' onClick={() => addToCarts(item)}>
                                            <i className='fa fa-plus'></i>
                                        </button>

                                        <button className='desCarts' onClick={() => decreaseQty(item)}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                </div>                             
                            </div>                           
                        )
                    })}
                    </div>
                    <div className='Carts-total product'>
                        <h2>Carts
 Summary</h2>
                        <div className='d_flex'>
                            <h4>Total Price: </h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>
        </div>
      </section>
    </>
  )
}

export default Carts

