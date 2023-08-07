import React from "react";
import AvailableProducts from "./AvailableProducts";

const productsArr = [

    {
    
      id: "p1",
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 1,
    
    },
    
    {
  
    id: "p2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1,
    
    },
    
    {
  
    id: "p3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    
    },
    
    {
    
    id: "p4",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1,
    
    }
    
    ]

    const Products = () =>{
        const display = productsArr.map((item) => (
            <AvailableProducts 
                                     id={item.id}
                                  title={item.title}
                               imageUrl={item.imageUrl}
                                  price={item.price}
                               quantity={item.quantity}
                               />

        ));
        return (
            <React.Fragment>
            <h3 style={{textAlign:"center"}}>Music</h3>
            <ul>{display}</ul>
            </React.Fragment>
        )
    };

    export default Products;