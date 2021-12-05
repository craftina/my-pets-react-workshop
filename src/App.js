import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authService';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Resgister';
import AddPet from './components/AddPet/AddPet';
import MyPets from './components/MyPets/MyPets';
import Footer from './components/Footer';


function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' });
  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      email: user
    })
  }, []);

  const onLoginHandler = (email) =>{
    setUserInfo({
      isAuthenticated: Boolean(email),
      email: email
    })
  };

  return (
    <div id="container">

      <Header  {...userInfo}/>
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLoginHandler={onLoginHandler}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/my-pets" element={<MyPets />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
