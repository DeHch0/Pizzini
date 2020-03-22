import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { login as userLogin } from '../Services/UserService';
import Header from '../Common/Header';
import About from '../Common/About';
import ProductList from '../Products/ProductList';
import LoginForm from '../User/Login/LoginForm'
import RegisterForm from '../User/Register/RegisterForm'
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import ProductCreate from '../Products/ProductCreate/'
import ProductEdit from '../Products/ProductEdit/'
import CategoryCreate from '../Category/Create';
import ReadCategories from '../Category/Read';

export default function App() {

  const login = (data) => {
    return userLogin(data).then(() => {

    });
  }

  return (
    <Router>
      <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/" exact>
            < ProductList/>
          </Route>

          <Route path="/about" exact>
            < About/>
          </Route>

          <Route path="/products" exact>
            {/* <ProductList/> */}
          </Route>

          <Route path="/product/create" exact>
            <ProductCreate/>
          </Route>

          <Route path="/product/view/:id" exact>
            <ProductDetails/>
          </Route>

          <Route path="/product/edit/:id" exact>
            <ProductEdit/>
          </Route>

          <Route path="/orders" exact>
            {/* <OrdersList/> */}
          </Route>

          <Route path="/orders/:id" exact>
            {/* <OrderDetails/> */}
          </Route>

          <Route path="/category/create" exact>
            <CategoryCreate/>
          </Route>
          
          <Route path="/category" exact>
            <ReadCategories/>
          </Route>

          <Route path="/users" exact>
            {/* <UseersList/> */}
          </Route>

          <Route path="/login">
            <LoginForm login={login}/>
          </Route>

          <Route path="/register">
            <RegisterForm />
          </Route>

        </Switch>
      
    </Router>
  );
}
