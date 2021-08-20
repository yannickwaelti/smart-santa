import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Wishlist from './pages/wishlist/wishlist.component';
import MyGifts from './pages/my-gifts/my-gifts.component';
import Groups from './pages/groups/groups.component';
import SignInRegister from './pages/sing-in-register/sign-in-register.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/gifts' component={MyGifts} />
        <Route path='/groups' component={Groups} />
        <Route path='/sign-in' component={SignInRegister} />
      </Switch>
    </div>
  );
}

export default App;
