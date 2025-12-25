import React from 'react'

const Display = ({count}) => {
  return (
    <div className='max-w-sm mx-auto bg-amber-300 text-black text-center py-28 shadow-sm border px-8'>
        <h2 className='text-2xl font-bold mb-4'>Display</h2>
        <p>Count: {count}</p>
    </div>
  )
}

export default Display