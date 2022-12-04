import LoginPage from "./components/login/login";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Cart from "./components/cart/cart.jsx";
/* import HomePage from "./components/homepage/homepage.jsx"; */
import Register from "./components/register/register.jsx";
import Footer from "./components/footer/footer.jsx";
import Intro from "./components/intro/intro.jsx";
import Blog from "./components/blog/blog.jsx";
import "./App.css"
import Slide from "./components/homepage/Slide";


function App() {
  return (
    <div className="page">
      <Header />   
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/intro" component={Intro} />
        <Route path="/blog" component={Blog} />

        <Route path="/register" component={Register} />
         {/* <Route path="/" component={HomePage} /> */}
         <Route path="/" component={Slide} />
        
      </Switch>
      <Footer />
     
    </div>
  );
}

export default App;
