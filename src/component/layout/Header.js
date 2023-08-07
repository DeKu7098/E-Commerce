import classes from './header.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../products/store/Auth-Context';

const Header = (props) =>{
  const history = useHistory();
  const authCtx = useContext(AuthContext);
 
 const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = async() => {
      authCtx.logout();
      console.log(authCtx.isLoggedIn);
      console.log('xyz');
      history.replace('/auth');
      };

  return(
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

                {isLoggedIn && (<NavLink to="/store">Store</NavLink>)}
                </li>
            </h3>
            <h3>
                <li>
            <NavLink to="/about">About</NavLink>
                </li>
            </h3>
            <h3>
              <li>
            {isLoggedIn && (
              <NavLink  to='/profile'>
                    Profile
              </NavLink>
                            )}
              </li>
            </h3>
        
           
            <h3>
             <li>
                <NavLink to="/Contactus">Contact us</NavLink>
             </li>
            </h3>
            
           <h3>
            <li> {isLoggedIn &&(
                       <button onClick={logoutHandler}>LOGOUT</button>
                               )}
           </li>
          </h3>
            
            
            
            <button onClick={props.onClick}>Cart</button>
        </span>
        {/* <span className={classes.main2}>
        <Cart />
        </span> */}
      </section>
      <section className={classes.section}>
        <h1>The Generic</h1>
      </section>
      {/* <section className={classes.music}>
        <h3 className={classes.musich3}>Music</h3>
      </section> */}
    </header>
  );
};

export default Header;