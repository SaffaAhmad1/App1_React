import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Notfound from './components/Notfound/Notfound';

let x = createBrowserRouter([
  {path:"" , element: <Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<Notfound/>}
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App