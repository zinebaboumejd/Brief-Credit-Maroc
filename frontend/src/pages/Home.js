import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Home() {
   
   useEffect(()=>{
    const getdata = async ()=>{
      const res = await axios.get("http://localhost:6060/admin/getclient")
      console.log(res.data)
     }
     getdata()
   })

  return (
    <div>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
    </div>
  )
}

export default Home