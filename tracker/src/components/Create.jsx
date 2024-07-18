import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import { Result } from 'postcss';
const Create = () => {
  const [name, setName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/add",{name:name,expiryDate:expiryDate})
    .then(result=> console.log(result))
    .catch(err=>console.log(err)) 
  };

  return (
    <div className='font-light px-10 mt-14'>
      <form onSubmit={handleSubmit} className='flex gap-5 justify-center'>
        <div >
            <input 
              className='bg-black text-white h-18 pl-3 w-64 rounded-md border border-gray-300 p-2'
              type="text" 
              placeholder='Enter item name'
              value={name} 
              onChange={(e)=>setName(e.target.value)}
              required 
            />
        </div>
        <div>
          <label>
            Expiry Date:
            <input 
              className='h-10 bg-white text-black ml-4 p-4 rounded-md border border-gray-300'
              type="date" 
              value={expiryDate} 
              onChange={(e) => setExpiryDate(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button  className='bg-green-500 h-10 w-40 text-white flex items-center justify-center rounded-md border border-gray-300 p-2' ><FaPlus size='20' />Add item</button>
        
      </form>
    </div>
  );
};

export default Create;
