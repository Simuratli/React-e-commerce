import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Switch, Route} from "react-router-dom";
import './index.css'
import Header from './components/header/header.component'
import SignPage from './pages/sign/sign.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser:null
    };
   
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user =>{
    createUserProfileDocument(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/shop' component={ShopPage} />
        <Route exact={true} path='/sign' component={SignPage} />
      </Switch>
   
      </div>
    );
  }
}


export default App;
