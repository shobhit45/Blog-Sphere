import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider} from 'react-redux'
import store from './store/Store.js'
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Protected from './component/AuthLayout.jsx'
import Signup from './pages/Signup'
import Allpost from './pages/Allpost.jsx'
import Addpost from './pages/Addpost'
import Editpost from './pages/Editpost.jsx'
import Post from './pages/Post.jsx'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={
      <Protected authentication={false}>
       <Login/>
      </Protected>
    }/>
    <Route path='/login' element={
      <Protected authentication={false}>
       <Login/>
      </Protected>
    }/><Route path='/signup' element={
      <Protected authentication={false}>
       <Signup/>
      </Protected>
    }/><Route path='/all-posts' element={
      <Protected authentication>
        {" "}
       <Allpost/>
      </Protected>
    }/>
    <Route path='/add-post' element={
      <Protected authentication>
        {" "}
       <Addpost/>
      </Protected>
    }/>
    <Route path='/edit-post/:slug' element={
      <Protected authentication>
        {" "}
        <Editpost/>
      </Protected>
    }/>
    <Route path="/post/:slug" element={<Post/>}/>
    </Route>
   
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
