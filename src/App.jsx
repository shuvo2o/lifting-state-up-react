import React, { useState } from 'react'
import Couter from './components/Couter'
import Display from './components/Display'

const App = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex'>
        <Couter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        <Display count={count}/>
      </div>
    </div>
  )
}

export default App