import './App.css';
import Header from "./common/header/Header";
// Setup để chạy "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages"
import Data from "./components/flashDeals/Data"
import { useState } from "react"
import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';



function App() {
  // 1: fetch (lấy) dữ liệu từ database
  const {productItems} = Data

  //làm giỏ hàng
  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id?
        {...productExit, qty:productExit.qty+1} : item)))
    }
    else {
      setCardItem([...cartItem,{...product, qty : 1}])
    }
  }

/*Chức năng giảm Sl trong giỏ hàng */
const decreaseQty = (product) => {
  const productExit = cartItem.find((item) => item.id === product.id)
  if(productExit.qty === 1) {
    setCardItem(cartItem.filter((item) => item.id !== product.id))
  }
  else {
    setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty: productExit.qty-1}:item)))
  }
}

/*console.log("addToCart") */
  return (
    <>  
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart}/>
          </Route>

          {/* xuất giỏ hàng */}
          <Route path='/cart' exact>
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty = {decreaseQty}/>
        </Route> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
