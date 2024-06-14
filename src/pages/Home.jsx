import React, { useEffect, useState } from "react";
import appservice from "../Appwrite/Config";
import {Container,Postcard} from '../component'

function Home() {
    const [post,setpost]=useState([])
    useEffect(()=>{
        appservice.getposts().then((posts)=>{
            if (posts) {
                setpost(posts.documents)
            }
        })
    })
    if (post.length===0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts or add posts to see
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
  return (
    <div className=" py-8 w-full">
        <Container>
            <div className=" flex flex-wrap">
                {
                    post.map((post)=>(
                        <div key={post.$id} className=" p-2 w-1/4">
                            <Postcard {...post}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Home;