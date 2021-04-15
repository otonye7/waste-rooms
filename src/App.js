import React from 'react';
import Home from './bookings/Home';
import Login from './auth/Login';
import Register from './auth/Register';



function App() {
  return (
    <div className="App">
        <Home />
        <Login />
        <Register />
    </div>
  );
}

export default App;
