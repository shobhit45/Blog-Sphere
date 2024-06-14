import React, { useEffect } from 'react'
import appwriteservice from '../Appwrite/Config';
import Postcard from '../component/Postcard'
import Container from '../component/container/Container';


function Allpost() {
    const [posts,setposts]=useEffect([])
        useEffect(()=>{

        },[])
       appwriteservice.getposts([]).then((posts)=>{
        if (posts) {
            setposts(posts)
        }
       }) 
      
  return (
    <div className=' w-full py-8'>
        <Container>
            <div className=' flex flex-wrap '>
                {posts.map((post)=>(
                    <div key={post.$id} className=' p-2 w-1/4'>
                        <Postcard post={post}/>
                         </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allpost