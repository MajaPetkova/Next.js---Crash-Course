'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={()=> console.log("click")} className='p-3 mr-5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-700'>Add to card</button>
        <button className='btn btn-accent'>Remove</button>
    </div>
  )
}

export default AddToCart