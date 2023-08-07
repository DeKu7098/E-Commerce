import './Home.css';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./ExtraHeader.module.css";
import AuthContext from '../store/Auth-Context';

const Home=()=>{
   const authCtx = useContext(AuthContext)
    return(
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
          <h3>
            <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
          </h3>
        </span>
        <h1>THE GENERICS</h1>
        </section>
        <button>Get Our Latest Album</button>
        <button className="playbtn">►</button>
      </header>
      <section className="container">
        <h2>TOURS</h2>
        <div>
            <div className="touritem">
                <span className="tourdate" >JULY16</span>
                <span className="tourplace">DETROIT,MI</span>
                <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
            <div className="touritem">
                <span className="tourdate" >JULY19</span>
                <span className="tourplace">TORONTO,ON</span>
                <span className="tour-spec-place">BUDWEISER STAGE</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
            <div className="touritem">
                <span className="tourdate" >JULY22</span>
                <span className="tourplace">BRISTOW,VA</span>
                <span className="tour-spec-place">JIGGY LUBE LIVE</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
            <div className="touritem">
                <span className="tourdate">JULY29</span>
                <span className="tourplace">PHEONIX,AZ</span>
                <span className="tour-spec-place">AK-CHIN PAVILION</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
            <div className="touritem">
                <span className="tourdate" >AUG 2</span>
                <span className="tourplace">LAS VEGAS,NV</span>
                <span className="tour-spec-place">T-MOBILE ARENA</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
            <div className="touritem">
                <span className="tourdate" >AUG 7</span>
                <span className="tourplace">CONCORD,CA</span>
                <span className="tour-spec-place">CONCORD PAVILION</span>
                <button className="buybtn">BUY TICKETS</button>
              
            </div>
        </div>

      </section>
      </React.Fragment>
    )
}

export default Home;