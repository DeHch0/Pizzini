import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from '../Common/Header';
import About from '../Common/About';
import ProductList from '../Products/ProductList';
import LoginForm from '../User/Login/LoginForm'
import RegisterForm from '../User/Register/RegisterForm'
import ProductDetails from '../Products/ProductDetails/ProductDetails';

export default function App() {

  let params = [
    {
      "name": "C-3PO",
      "description": "167",
      "imageUrl": "https://mrpizza.bg/images/products/tall_products-691.png"
    },
    {
          "name": "C-3PO",
          "description": "167",
          "imageUrl": "https://mrpizza.bg/images/products/tall_products-691.png"
        }
  ]

  return (
    <Router>
      <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/" exact>
            < ProductList params={params} />
          </Route>

          <Route path="/about" exact>
            < About/>
          </Route>

          <Route path="/products" exact>
            {/* <ProductList/> */}
          </Route>

          <Route path="/product/view/:id" exact>
            <ProductDetails/>
          </Route>

          <Route path="/product/edit/:id" exact>
            {/* <ProductEdit/> */}
          </Route>

          <Route path="/orders" exact>
            {/* <OrdersList/> */}
          </Route>

          <Route path="/orders/:id" exact>
            {/* <OrderDetails/> */}
          </Route>

          <Route path="/users" exact>
            {/* <UseersList/> */}
          </Route>

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/register">
            <RegisterForm />
          </Route>

        </Switch>
      
    </Router>
  );
}
