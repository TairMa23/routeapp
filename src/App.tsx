import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainActivity from './components/MainActivity';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';

import Cart from './screens/Cart';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Store from './screens/Store';
import Support from './screens/Support';

const App = () => {
  return (
    <Router>
      <div className='container-fluid' style={{padding:0, margin:0, overflowX:'hidden'}}>
        <Topnav />
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
          </div>
            <MainActivity>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/store' element={<Store />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/support' element={<Support />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            </MainActivity>
        </div>
      </div>
    </Router>
  )
}

export default App