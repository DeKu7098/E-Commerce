import { useContext } from 'react';
import CartContext from './store/cart-context';
import './CartItems.css';

const CartItemS = (props) =>{
  const cartCtx = useContext(CartContext); 
  const removeItemHandler = () => {
        console.log(props.id);
        cartCtx.removeItem(props.id);

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>{props.title}</span>
          <img src={props.imageUrl} alt="products" className="i" />
        </div>
        <div className="col">
          <span>{`Rs ${props.price}`}</span>
        </div>
        <div className="col">
          <span>{props.quantity}</span>
        </div>
        <div className="col">
          <button onClick={removeItemHandler}>Remove</button>
        </div>
      </div>
    </div>
  )
};
export default CartItemS;