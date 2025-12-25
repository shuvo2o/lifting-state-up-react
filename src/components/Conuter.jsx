import React, { useState } from 'react'

const Counter = ({count, handleIncrement, handleDecrement}) => {
    
  return (
    <div className='max-w-sm px-8 mx-auto text-center border shadow-sm py-28'>
        <h2 className='mb-4 text-2xl font-bold'>Counter App</h2>
        <p className='mb-8 text-lg font-medium'>{count}</p>
        <div className='space-x-2'>
            <button onClick={handleIncrement} className='px-6 py-2 text-white bg-blue-500 rounded'>Increase (+)</button>
            <button onClick={handleDecrement} className='px-6 py-2 text-white bg-red-500 rounded'>Decrease (-)</button>
        </div>
    </div>
  )
}

export default Counter