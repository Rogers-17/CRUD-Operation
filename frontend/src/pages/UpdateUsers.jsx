import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateUsers() {

  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, SetAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers/"+id)
    .then(response => {
      console.log(response)
      setName(response.data.name)
      setEmail(response.data.email)
      SetAge(response.data.age)
    })
    .catch(err => console.log(err))
}, [])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUsers/"+id, {name, email, age})
    .then(response => {
      console.log(response.data)
      navigate('/');
    })
    .catch(err => console.log(err))
}

  return (
    <div className='flex h-screen bg-blue-500 justify-center items-center'>
      <div className='w-[40%] bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2 className='text-3xl mb-4'>Update Users</h2>
          <div className='mb-2'>
            <label>Name</label>
            <input type="text" placeholder='Enter Name' value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-[100%] border h-10 rounded-sm pl-2'/>
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input type="text" placeholder='Enter Email' value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[100%] border h-10 rounded-sm pl-2'/>
          </div>
          <div className='mb-2'>
            <label>Age</label>
            <input type="number" placeholder='Enter Age' value={age}
            onChange={(e) => SetAge(e.target.value)}
            className='w-[100%] border h-10 rounded-sm pl-2'/>
          </div>
          <button className='bg-green-600 px-3 py-2 rounded-md
      text-white text-lg' type='submit'>Update</button>
        </form>
        </div>
        </div>
  )
}

export default UpdateUsers
