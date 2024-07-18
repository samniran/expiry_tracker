import React, { useState } from 'react'
import Create from './Create'
import Card from './Card'
import './home.scss'
const Home = () => {

  return (
    <div >
      <div className='sticky_part'> 
        <div className='h-20 flex items-center w-full justify-center'> 
            <h1 className='text-3xl font-bold font-abc'>Expiry Tracker</h1> 
        </div>
      
        <Create />
      </div>
      <Card />

      
    </div>
  )
}

export default Home
