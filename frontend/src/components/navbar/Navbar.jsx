import React, { useState } from 'react'

const Navbar = () => {
  function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    window.location.href="/"
  }
  // tester si l'utilisateur est connecté ou non pour afficher les connecter et deconnecter 
  const role =localStorage.getItem('role')
  if(role==="admin" || role==="client"){
    var Links =[
      {name:"HOME",link:"/"},
      {name:"Dashboard",link:"/dashboard"},
      {name:"Profile",link:"/profileclient"},
      {name:"Logout",link:"#",onClick:logout},
    ];
  }else{
    var Links =[
      {name:"HOME",link:"/"},
      {name:"Dashboard",link:"/dashboard"},
      {name:"Register",link:"/register"},
      {name:"Login",link:"/login"},
    ];
  }
  
   const [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 bg-black mr-1 pt-2'>
        <ion-icon name="logo-ionic  "></ion-icon>
        </span>
        CREDIT_MAROC
      </div>
      
     

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-indigo-600 duration-500'>{link.name}</a>
            </li>
          ))
        }
      
      </ul>
      </div>
    </div>
  )
}

export default Navbar