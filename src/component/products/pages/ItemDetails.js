import { useParams,NavLink } from 'react-router-dom';
import React from 'react';
import classes from './ExtraHeader.module.css';
const productsArr = [
  {
    id: "p1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 1,
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: "p3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    id: "p4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const ItemDetails = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    
          <section>
<header>
      <span className={classes.main}>
            <h3>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
            </h3>
            <h3>
                <li>
                  <NavLink to="/store">Store</NavLink>
                </li>
            </h3>
            <h3>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                </h3>
                <h3>
                <li>
                  <NavLink to="/Contactus">Contact us</NavLink>
                </li>
                </h3>
         </span>
        <h1>The Generic</h1>
      </header>
      
      <section style={{textAlign:'center'}}>
      <h1>Product Details</h1>
      {productsArr.map((products) => (
       <div> {params.productId === products.id && <div>
          <div>
            <h4>Title: {products.title}</h4>
          </div>
          <div>
            <img src={products.imageUrl} alt="products" />
          </div>
          <span> </span>
          <div>
            <h4>Rs.{products.price} </h4>
          </div>
        </div>}
        </div> 
      ))}
      </section>
    </section>
  );
};

export default ItemDetails;