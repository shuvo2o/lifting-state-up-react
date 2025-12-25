import  { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);
    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then((data) =>{
            // console.log(data)
            setData(data)
        })
    }, []) //once after first render
    console.log("Data from states", data)
  return (
    <div>
      <h2 className='text-2xl'>Data Fetching</h2>
      <ul>
        <li>Post Title 1</li>
      </ul>
    </div>
  )
}

export default FetchData
