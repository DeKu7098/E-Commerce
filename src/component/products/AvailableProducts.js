import React, { useContext } from 'react';
//import axios from 'axios';
import {Link} from "react-router-dom";
import CartContext from './store/cart-context';
import './AvailableProducts.css';


const AvailableProducts = (props) => {
    const crtCtx = useContext(CartContext);
    const addItemHandler = () =>{
    //    const {title,imageUrl,id} = props;
    //    console.log(title);
    //    const a = {title: title,
    //               imageUrl: imageUrl,
    //               id: id
    //              }
    //    const email = localStorage.getItem('Email');
    //    const email1 = email.replace('@','').replace('.','');
    //    axios.post(`https://crudcrud.com/api/77dbac12a9ee49a289ecc430692be400/${email1}`,a);
          crtCtx.addItem({...props,quantity:1});
    }
//    const crtCtx = useContext(CartContext);
//    const addToCart = (event) => {
        
//      event.preventDefault();
//      crtCtx.items.push(props.items);
//      console.log('after addItemToCart',crtCtx);
       
        
//     }
console.log(props);
      
  return (
   
        <section  className="productContainer">
            <div className="products">
            <Link to={`/store/${props.id}`}>
            <span>{props.title}</span>
            <img src={props.imageUrl} alt="product"></img> 
            <span>{`Rs ${props.price}`}</span>
            </Link> 
            {/* <div>{`Quantity = ${props.quantity}`}</div> */}
            <button onClick={addItemHandler}>Add To Cart</button>
         </div>
         </section>
        
    )
    
};

export default AvailableProducts;