import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/login/login';
import { SignUp } from '../../pages/sign-up/sign-up';
import { useDispatch } from '../../store/store';
import { initializeAuth } from '../../features/userSlice/userSlice';
import { OnlyUnAuth } from '../protected-route/protected-route';
import { Home } from '../../pages/home/home';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAuth())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<OnlyUnAuth component={<Login />}/>} />
      </Routes>
    </>
  );
}

export default App;
