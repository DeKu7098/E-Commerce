import React from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
  return (


    <React.Fragment>
      <header>
        <ul className="header">
          <li>
            <NavLink  to="/home">
              Home
            </NavLink>
          </li>

          <NavLink to="/store">Store</NavLink>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
        </ul>
        <h1>The Generic</h1>
      </header>
    <section className={classes.profile}>
      <h1>User Profile</h1>
      <ProfileForm />
    </section>
    </React.Fragment>
  );
};

export default UserProfile;