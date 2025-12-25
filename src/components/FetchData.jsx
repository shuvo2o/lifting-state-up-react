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
<div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Data Fetching with Cards
      </h2>

      {/* Grid container to show cards in rows */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => (
          <div 
            key={post.id} 
            className="p-6 text-white transition duration-300 transform shadow-lg rounded-xl hover:scale-105 bg-gradient-to-br from-purple-500 to-indigo-700"
          >
            <span className="px-2 py-1 font-mono text-xs uppercase rounded bg-white/20">
              Post ID: {post.id}
            </span>
            <h3 className="mt-3 mb-2 text-xl font-bold leading-tight capitalize">
              {post.title.slice(0, 30)}...
            </h3>
            <p className="text-sm leading-relaxed text-purple-100">
              {post.body.slice(0, 100)}...
            </p>
            <button className="px-4 py-2 mt-4 text-xs font-semibold text-purple-700 bg-white rounded-full hover:bg-purple-100">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FetchData
