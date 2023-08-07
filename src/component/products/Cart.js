import React, { useContext } from 'react';

import CartContext from './store/cart-context';
import './Cart.css';
import CartItemS from './CartItems';

    const Cart = (props) => {
    let cartTotal=0;
    const cartCtx = useContext(CartContext);
   
    // const cartItems = [

    //     {
    //     id: "p1",
    //     title: 'Colors',
        
    //     price: 100,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
    //     quantity: 2,
        
    //     },
        
    //     {
    //         id: "p2",
    //     title: 'Black and white Colors',
        
    //     price: 50,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
    //     quantity: 3,
        
    //     },
        
    //     {
    //         id: "p3",
        
    //     title: 'Yellow and Black Colors',
        
    //     price: 70,
        
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
    //     quantity: 1,
        
    //     }
        
    //     ]

   

    
       
       

        const display = cartCtx.items.map((item) => (
          <CartItemS  
                         id={item.id}
                      title={item.title}
                      imageUrl={item.imageUrl}
                      price={item.price}
                      quantity={item.quantity}
                      
                      />
        
        ));
        const totalCtx=useContext(CartContext);

        totalCtx.items.forEach((item) =>{
         let subTotal=0;
         subTotal = item.quantity*item.price;
         cartTotal = cartTotal+subTotal;
        });

        return (
            <div className="cart">
    <h3 className="cartName">
      Cart 
      <button className="btn btn-primary X" onClick={props.onClick}>
        X
      </button>
    </h3>
    <div className="container">
      <div className="row Header">
        <div className="col">
          <span>Item</span>
        </div>
        <div className="col">
          <span>Price</span>
        </div>
        <div className="col">
          <span>Quantity</span>
        </div>
        <div className="col">
          Total
        </div>
      </div>
    </div>
    {display}
     
       <div className="Total">TOTAL AMOUNT = {cartTotal}</div>
       {/* <button >Place Order</button> */}
         
  </div>

        )
      };
    
export default Cart;    