import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../Appwrite/Auth'
import {logout} from '../../store/Authslice'

function Logoutbtn() {
    const dispatch=useDispatch()
    const logouthandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (

    <div>
        <button 
        onClick={logouthandler} className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
            Logout
        </button>
    </div>
  )
}

export default Logoutbtn