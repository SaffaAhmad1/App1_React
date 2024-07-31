import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
    <div className='text-center pt-32' style={{color:"#2c3e50"}}>
      <h2 className='uppercase mb-3 text-4xl font-bold'>portfolio component</h2>
      <div className='flex items-center justify-center mb-4'>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
        <i class="fa-solid fa-star mr-4"></i>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
      </div>
    </div>
    

    <div className=' mx-auto' style={{width:"1200px"}}>
    <div className='row'>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port1} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port2} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port3} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port1} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port2} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='w-1/3 p-6'>
      <div className=' relative'>
      <img src={port3} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
    </div>
    </div>


    

    
    </>
  )
}
