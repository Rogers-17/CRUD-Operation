import React from 'react'
import { Route, Routes, Link, Router} from 'react-router-dom'
import CreateUsers from './pages/CreateUsers'
import UpdateUsers from './pages/UpdateUsers'
import Homepage from './pages/Homepage'

function App() {
  return (
    
    <div className=''>
      <div className='flex justify-between items-center px-5 bg-white h-[50px]'>
        <h2 className='text-2xl font-bold'>CRUD.</h2>
        <ul className='flex gap-5 text-2xl font-bold'>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create</Link>
          <Link to='/update'>Update</Link>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/create' element={<CreateUsers />}></Route>
        <Route path='/update/:id' element={<UpdateUsers />}></Route>
      </Routes>
    </div>

  )
}

export default App
