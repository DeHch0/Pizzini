import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { login as userLogin, checkAdmin as auth, checkAdmin, checkIsLogged } from '../Services/UserService';
import {publicRoute} from '../Route/'

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
import BucketView from '../Bucket/View';
import ContactView from '../Contact/View';

export default function App() {

  const [bucketLenght, setBucketLength] = useState(+Object.keys(sessionStorage).length);
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (data, setError,history) => {
    userLogin(data)
    .then(res => {
      if(res.error) {
        setError(res.error);
      } else {
      cookie.save('username' , res.username, {httpOnly: false});
      cookie.save('auth_cookie' , res.auth_cookie, {httpOnly: false});
      checkIsLogged();
      checkAdmin();
      history.push("/");
      }})
    .catch(err => {console.log(err)})
  }

  const checkIsLogged = () => {
    const username = cookie.load('username');

    username ? setIsLogged(true) : setIsLogged(false)
  }

  const checkIsAdmin = () => {
    auth()
    .then(data => {
      if(data.result) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false);
      }
    })
  }

  const setBucket = () => {
      setBucketLength(+Object.keys(sessionStorage).length)
    }

    useEffect(() => {
        checkIsAdmin();
        checkIsLogged();
    })

  return (
    <Router>
      <Header checkIsAdmin={checkIsAdmin} checkIsLogged={checkIsLogged} isAdmin={isAdmin} isLogged={isLogged} bucket={bucketLenght}/>

        <Switch>

                  {/* Public Routes */}

          {publicRoute('/', <ProductList />)}
          {publicRoute('about', < About />)}
          {publicRoute('product/view/:id', <ProductDetails isAdmin={isAdmin} bucket={setBucket}/>)}
          {publicRoute('bucket',  <BucketView bucket={setBucket}/>)}
          {publicRoute('contact',  < ContactView />)}

                  {/* Protected Routes */}
                  {/* Admin Routes */}

          <Route path="/product/create" exact>
            { isAdmin ? <ProductCreate/> : <Redirect to='/'/>}
          </Route>

          <Route path="/product/edit/:id" exact>
            { isAdmin ? <ProductEdit/> : <Redirect to='/'/>}
          </Route>

          <Route path="/category" exact>
          {isAdmin ? <ReadCategories/>  : () => <Redirect to='/'/>}
          </Route>

          <Route path="/category/create" exact>
           {isAdmin ? <CategoryCreate/>  : <Redirect to='/' />}
          </Route>

                   {/* Logged user protected routes */}

          <Route path="/login">
            { isLogged  ? <Redirect to='/'/> : <LoginForm login={login}/>}
          </Route>

          <Route path="/register">
          { isLogged  ? <Redirect to='/'/> : <RegisterForm />}
          </Route>

        
        </Switch>
      
    </Router>
  );
}
