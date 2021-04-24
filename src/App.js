import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './bookings/Home';
import PrivateRoute from './components/PrivateRoutes';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/Topnav';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/DashboardSeller';
import NewHotels from './hotels/NewHotel';




function App() {
  return (
    <BrowserRouter>
    <TopNav />
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/dashboard/seller' component={DashboardSeller}/>
        <PrivateRoute exact path='/hotels/new' component={NewHotels}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
