import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from '../Common/Header';
import ProductList from '../Products/ProductList';

export default function App() {

  let params = [
    // {
    //   "name": "C-3PO",
    //   "description": "167",
    //   "imageUrl": "https://mrpizza.bg/images/products/tall_products-691.png"
    // },
    // {
    //       "name": "C-3PO",
    //       "description": "167",
    //       "imageUrl": "https://mrpizza.bg/images/products/tall_products-691.png"
    //     }
  ]

  return (
    <Router>
      <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            < ProductList params={params} />
          </Route>
        </Switch>
      
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
