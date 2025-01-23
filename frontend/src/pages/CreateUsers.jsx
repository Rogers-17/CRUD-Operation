import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function CreateUsers() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, SetAge] = useState();
  const navigate = useNavigate();

  const submitForm = () => {
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(response => {
      console.log(response.data)
      navigate('/');
    })
    .catch(err => console.log(err))
  }
  

  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
      <div className='w-[40%] bg-white rounded p-3'>
        <form onSubmit={submitForm}>
          <h2 className='text-3xl mb-4'>Add Users</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input type="text" placeholder='Enter Name'
            className='w-[100%] border h-10 rounded-sm pl-2'
            onChange={(e) => setName(e.target.value)}
            required autoComplete='off'/>
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input type="text" placeholder='Enter Email'
            className='w-[100%] border h-10 rounded-sm pl-2'
            onChange={(e) => setEmail(e.target.value)}
            required autoComplete='off'/>
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type="number" placeholder='Enter Age'
            className='w-[100%] border h-10 rounded-sm pl-2'
            onChange={(e) => SetAge(e.target.value)}
            required autoComplete='off'/>
          </div>
          <button className='bg-green-600 px-3 py-2 rounded-md
      text-white text-lg' onSubmit={submitForm}>Submit</button>
        </form>
        </div>
        </div>
  )
}

export default CreateUsers
