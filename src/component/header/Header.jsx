import React from 'react'
// import {  Container,  Logo, Logoutbtn } from '../index'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import Logo from '../Logo'
import Logoutbtn from './Logoutbtn'
function Header() {
  const authstatus=useSelector((state)=>{
    state.auth.status
  })
  const navigate=useNavigate()
  const navitems=[
    {
    name:'Home',
    slug:'/',
    active: true,
  }, 
  {
    name: "Login",
    slug: "/login",
    active: !authstatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authstatus,
},
{
    name: "All Posts",
    slug: "/all-posts",
    active: authstatus,
},
{
    name: "Add Post",
    slug: "/add-post",
    active: authstatus,
},
]
  return (
    <header className=' py-3 shadow bg-gray-500'>
      <Container>
        <nav className=' flex'>
          <div className=' mr-4'>
            <Link to="/" >
            <Logo width='70px'/>

            </Link>
          </div>
          <ul className=' flex ml-auto'>
            {navitems.map((item)=>
               item.active ?( <li key={item.name}>
                <button onClick={()=>navigate(item.slug)}
                className=' inline-block px-6 py2 duration-200 hover:bg-blue-100 rounded-full'
                
                >
                  {item.name}</button>
               </li>):null
            )}
            {authstatus && (
              <li >
                <Logoutbtn/>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header