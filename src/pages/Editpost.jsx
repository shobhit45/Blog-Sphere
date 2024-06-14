import React, { useEffect, useState } from 'react'
import Container from '../component/container/Container'
import Postform from '../component/postform/Postform'
import appwriteservice from '../Appwrite/Config'
import { useNavigate, useParams } from 'react-router-dom'
function Editpost() {
    const [posts,setposts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect((slug)=>{
         if (slug) {
            appwriteservice.getpost(slug).then((post)=>{
                if (post) {
                    setposts(post)
                }
                else{
                    navigate('/');
                }
            })
         }
    },[slug,navigate])

  return posts ? (
    <div className=' py-8'>
        <Container>
            <Postform post={posts}/>
        </Container>
    </div>
  ) : null
}

export default Editpost