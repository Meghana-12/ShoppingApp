import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import SignIn from './Signup';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
     } else {
      dispatch({
        type: "SET_USER",
        user: null,
      })
     }
   }) ;
   return () => {
    unsubscribe(); //detach and reatch to new listener
   }
  }, [])
  console.log('user :::::',user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            {/* /checkout/:somestuff/page ohooooo <3*/}
            <NavBar/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignIn/>
          </Route>
          <Route path="/">
            <NavBar/>
            <Home/>
            <a href='https://www.freepik.com/photos/business-card'>Business card photo created by ijeab - www.freepik.com</a>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
