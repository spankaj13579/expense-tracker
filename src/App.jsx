import React from 'react'
import Login from './component/Login'
import ButtonMain from './component/util/ButtonMain'
import Dashbpard from './component/Dashbpard'
import Welcome from './component/Welcome'
import Getstartedexpenseteport from './component/util/Getstartedexpenseteport'
import Reportname from './component/Reportname'
import { Route, Routes } from 'react-router-dom'
import Addexpensemain from './component/Addexpensemain'

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Routes >
        <Route path='/' element={<Welcome />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/dashboard' element={<Dashbpard />} />
        <Route path='/reportname' element={<Reportname />} />
        <Route path='/addexpensemain' element= {<Addexpensemain />} />
      </Routes>
    </div>
  )
}

export default App