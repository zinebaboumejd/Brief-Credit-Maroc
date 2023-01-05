import React ,{useEffect}from 'react'
import SideBar from '../../components/sidebar/SideBar'

function GetClinet() {
    // fonction getclien
    function getClient(){
        fetch("http://localhost:6000/admin/getclient",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    }

    useEffect(() => {
        getClient()
    }, [])

  return (
    <div>
        <SideBar/>
        GetClinet
        <h1>GetClinet</h1>
        <h1>GetClinet</h1>
        <h1>GetClinet</h1>
    </div>
  )
}

export default GetClinet