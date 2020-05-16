import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from "react-router-dom";
import './index.css'

const Hatpage = ()=>{
  return (<div><h1>Hat page</h1></div>)
}



function App() {
  return (
    <div>
    <Switch>
      <Route exact={true} path='/' component={Homepage} />
      <Route exact={true} path='/hats' component={Hatpage} />
    </Switch>
 
    </div>
  );
}

export default App;
