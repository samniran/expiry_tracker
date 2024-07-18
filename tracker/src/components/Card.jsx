import React, { useEffect, useState } from 'react'
import './card.scss'
import { MdDelete } from "react-icons/md";

import axios from 'axios';
const Cardlist = ({ id,name, status, expiryDate }) => {
  const handleDelete=(id)=>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result=>{
        console.log("1")
      })
  }
  const formattedDate = new Date(expiryDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return (
    <div className='contain_sec'>
        <div className='card'>
            <h3 className='card_item'># {name}</h3>
            <div className={`card_item_status_${status}`}>
              {status === 'active' ? 'Good' : 'Expired'}
            </div>
            <div className='card_expiry'>
              <h2>Expiring On:</h2>
              <p>{formattedDate}</p>
            </div>
            <button className='card_delete'>
              <MdDelete size={30} onClick={()=>handleDelete(id)}/>
            </button>
        </div>
    </div>
  );
};

const Card = () => {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    
    axios.get('http://localhost:3001/get')
    .then(result=>setItems(result.data))
    .catch(err=>console.log(err))
  },[items])
  const getStatus=(expiryDate)=>{
    const currentDate=new Date();
    const expyDate=new Date(expiryDate);
    return currentDate<=expyDate?'active':'expired'
  }
  return items.length === 0 ? (
    <p className='error'>No items added !</p>
  ) : (
    <div className='main_card'>
      {items.map((item) => (
        <Cardlist 
          key={item._id}
          id={item._id} 
          name={item.name} 
          status={getStatus(item.expiryDate)} 
          expiryDate={item.expiryDate} 
        />
      ))}
    </div>
  );
};
export default Card
