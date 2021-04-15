import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './bookings/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/Topnav';




function App() {
  return (
    <BrowserRouter>
    <TopNav />
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
