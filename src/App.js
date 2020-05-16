import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from "react-router-dom";
import './index.css'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
    <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact={true} path='/shop' component={ShopPage} />
    </Switch>
 
    </div>
  );
}

export default App;
