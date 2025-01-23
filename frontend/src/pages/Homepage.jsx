import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Homepage() {

    const [users, setUsers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(response => setUsers(response.data))
        .catch(err => console.log(err))
    }, [])

    const deleteUser = (id) => {
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='flex w-full h-screen bg-blue-500 justify-center items-center overflow-hidden'>
      <div className='w-50 bg-white rounded p-3'>
      <Link to="/create" className='bg-green-600 px-3 py-2 rounded-md
      text-white text-lg'>Add +</Link>
        <table className='table-auto w-full bg-white border-collapse 
        border-gray-300'>
            <thead>
                <tr>
                    <th className='px-10 py-2 border-b'>ID</th>
                    <th className='px-10 py-2 border-b'>Name</th>
                    <th className='px-10 py-2 border-b'>Email</th>
                    <th className='px-10 py-2 border-b'>Age</th>
                    <th className='px-10 py-2 border-b'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return <tr key={index}>
                            <td className='px-10 py-2 border-b'>{user._id}</td>
                            <td className='px-10 py-2 border-b'>{user.name}</td>
                            <td className='px-10 py-2 border-b'>{user.email}</td>
                            <td className='px-10 py-2 border-b'>{user.age}</td>
                            <td className='px-10 py-2 border-b gap-3'>
                            <Link to={`/update/${user._id}`} className='bg-green-500 px-2 py-1 rounded-md'>Edit</Link>
                            <button className='bg-red-500 px-2 py-1 rounded-md ml-3' 
                            onClick={(e) => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Homepage
