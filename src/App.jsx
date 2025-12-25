import React, { useState, useRef } from 'react'
import Counter from './components/Counter'
import Display from './components/Display'
import Input from './components/Input'
import FetchData from './components/FetchData'

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
    <div className='flex items-center justify-center h-screen'>
      <div className='flex'>
        <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        <Display count={count}/>
        <Input/>
        <FetchData/>
      </div>
    </div>
  )
}

export default App