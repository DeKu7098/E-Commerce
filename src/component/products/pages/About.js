import React, { useContext } from "react";
import classes from "./ExtraHeader.module.css";
import "./about.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/Auth-Context";

const About = () => {

 const authCtx = useContext(AuthContext);

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
        <h1>The Generic</h1>
        </section>
      </header>
      <section className="about">
        <h2>About</h2>
        <img src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png' alt='band' className='photo1'></img>
        <div>
          <section className="html">
          <p>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings.
            
              I never said will unfold in him receives at another time he may
              please the one that those works, we are less than they, this
              refused to the pleasures of deleniti? Those are! Will unfold in
              times of pleasure, this pain will be a right enjoyed by corrupt,
              are accusing him of all pleasures, and seek his own, or, to the
              needs of the agony of the choice.
            
              We hate the fellow. Lorem ipsum dolor, sit amet consectetur
              rebates The distinction, that arise from or to. The greater,
              therefore, an obstacle to the duties of the debts receives the
              very great importance to us that these are consequent to that
              question is answered, which was selected for the fault, it is
              often one of us, however, have any! Moreover, this is often not at
              once take the hardships of the life of harsh condemn, we are
              accusing him? Him whom something large cisterns.
           
          </p>
          </section>
        </div>
      </section>
      
    </React.Fragment>
  );
};

export default About;