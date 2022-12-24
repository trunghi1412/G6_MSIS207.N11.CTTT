import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../slices/api";
import CheckoutSuccess from "./CheckoutSuccess"
import { useNavigate } from 'react-router-dom';

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);
  let navigate = useNavigate();
  

  const handleCheckout = () => {
    navigate('/checkout-success');
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
