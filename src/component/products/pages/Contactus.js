import { useContext, useRef } from "react";
import React from "react";
import axios from "axios";
import "./Contactus.css";

import { NavLink } from "react-router-dom";
import classes from "./ExtraHeader.module.css";
import AuthContext from "../store/Auth-Context";



const Contactus = () => {
 const authCtx = useContext(AuthContext);
  const name1 = useRef();
  const email1 = useRef();
  const number1 = useRef();
  
  const submitHandler = (event) =>{
    event.preventDefault();
    const name = name1.current.value;
    const email = email1.current.value;
    const number = number1.current.value;
    const obj = {name: name,
                email: email,
                number: number}

    axios.post('https://react-http-61cce-default-rtdb.firebaseio.com/contact.json',obj);

    
  };

  return (
    <React.Fragment>
    <header>
    <section className={classes.header}>
        <span className={classes.main}>
            <h3>
                <li>
                <NavLink to="/home">Home</NavLink>
                </li>
            </h3>
            <h3>
                <li>
                {authCtx.isLoggedIn && (<NavLink to="/store">Store</NavLink>)}
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
        <h1>THE GENERICS</h1>
        </section>
      </header>

    <div class="form-style-6">
<h1>Contact Us</h1>
<form onSubmit={submitHandler}>
<input  type="text" name="field1" placeholder="Your Name" ref={name1}  />
<input  type="email" name="field2" placeholder="Email" ref={email1} />
<input  type="number" name="field3" placeholder="Contact Number" ref={number1}/>
<ul><button type='submit'>SUBMIT</button></ul>

</form>
</div>

</React.Fragment>    
  );
};

export default Contactus;