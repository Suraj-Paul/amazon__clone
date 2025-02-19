import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './CheckOut';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HSMmQGyS6WEA0mbRd6JXkpXBaw6UyxyAdnESrWBIEUoItEGwCmGgVCrKUWgDQQW6c2KrZ7SRJK6hHpKdWG2BdMq00zf1VHQDy")

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>>', authUser)
      if (authUser) {
        //the user just loggedIn or the use was loggedIn
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      } else {
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path = "/checkout">
            <Header />
            <CheckOut/>
          </Route>
          <Route path = "/payment">
            <Header />
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path = "/">
            <Header/>
            <Home/>
          </Route>
        </Switch> 
      </div> 
    </Router>
    
  );
}

export default App;
