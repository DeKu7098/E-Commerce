import React, { Suspense, useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header"; 
import Cart from "./component/products/Cart"; 
import CartProvider from "./component/products/store/CartProvider"; 
import Products from "./component/products/Products"; 
import Footer from "./component/products/pages/Footer";
import About from "./component/products/pages/About"; 
//import Home from "./component/products/pages/Home";
//import Contactus from "./component/products/pages/Contactus";
//import ItemDetails from "./component/products/pages/ItemDetails";
//import AuthPage from "./component/products/pages/Authpage";
//import UserProfile from "./component/Profile/UserProfile";
import AuthContext from "./component/products/store/Auth-Context"; 
import LoadingSpinner from "./component/Spinner/Spinner"; 

const Home = React.lazy(() => import('./component/products/pages/Home'));
const Contactus = React.lazy(() => import('./component/products/pages/Contactus'));
const ItemDetails = React.lazy(() => import('./component/products/pages/ItemDetails'));
const AuthPage = React.lazy(() => import('./component/products/pages/Authpage'));
const UserProfile = React.lazy(() => import('./component/Profile/UserProfile'));










function App() {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
  const cartHandler = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <Suspense fallback={
                      <div className='centered'>
                          <LoadingSpinner />
                      </div>
                      }>
    <CartProvider>
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>

        <Route path="/store/:productId" exact>
          <ItemDetails />
        </Route>

        <Route path="/store">
          <Header onClick={cartHandler} />
          {showCart && <Cart onClick={closeCart} />}
          {/* <Products />  */}
          {authCtx.isLoggedIn && (
            <Route path="/store" exact>
              <ul>
                <Products />
              </ul>
            </Route>
          )}
        </Route>

        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/contactus">
          <Contactus></Contactus>
        </Route>

        <Route path="/profile">
          <UserProfile></UserProfile>
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer></Footer>
    </CartProvider>
    </Suspense>
  );
}

export default App;
