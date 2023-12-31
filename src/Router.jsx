import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}
