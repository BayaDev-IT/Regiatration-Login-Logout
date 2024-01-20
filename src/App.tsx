import React, { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks/hooks';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/WordShanse/Home/Home';
import PrewievHome from './pages/authScens/PrewievHome/PrewievHome';
import Registration from './pages/authScens/Registration/Registration';
import Login from './pages/authScens/Login/Login';
import { getLSToken } from './LS';
import { fetchByUserData, setTocken } from './store/slice/userSlice';


const App: FC = () => {
  const { token } = useAppSelector(state => state.user)

  const dispath = useAppDispatch()
  useEffect(() => {
    let lsTocen = getLSToken()

    if (lsTocen !== null || lsTocen !== undefined) {
      dispath(setTocken(lsTocen))
    }
  }, [dispath])

  useEffect(() => {
    if (token) {
      dispath(fetchByUserData(token))
    }
  }, [dispath, token])

  return token ? (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  ) :
    (
      <Routes>
        <Route path='/' element={<PrewievHome />} />
        <Route path='/sign-up' element={<Registration />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    )
};

export default App;