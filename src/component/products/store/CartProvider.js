import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [ itemss, updateItems] = useState([]);
    const addItemToCartHandler = (item) =>{
        console.log(item);
       // updateItems([...itemss,item]);
    //    const email = localStorage.getItem('Email');
    //    const email1 = email.replace('@','').replace('.','');
    //    axios.get(`https://crudcrud.com/api/77dbac12a9ee49a289ecc430692be400/${email1}`).then((data) => {
    //    console.log(data.data);
    //    updateItems(data.data)}
    //    )
    
       
        const newItemArr = [...itemss]; //Deep Copy
        let xyz = false;
        newItemArr.forEach((element,index) => { 
          if(item.id === element.id){
            xyz = true;
            newItemArr[index].quantity = Number(newItemArr[index].quantity) + Number(item.quantity);
            }
          
        });
        if (xyz === true) {
        updateItems(newItemArr);
        }else{
            updateItems([...itemss,item]);
        }
        

        // updateItems([...items,item]);
        // console.log('inside aic', cartContext);
    };
    const removeItemFromCartHandler = (id) =>{
        const newItemArr = [...itemss];
        newItemArr.forEach((element,index) => {
            
            if(id === element.id){
                newItemArr.splice(index,1);
            }
        })
        updateItems(newItemArr);
    };

    
    
    
    const cartContext = {
        items: itemss,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;