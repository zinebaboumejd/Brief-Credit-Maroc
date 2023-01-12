import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'

function Depot() {
  
  const id=localStorage.getItem("_id")
  const token=localStorage.getItem("token")
  const role=localStorage.getItem("role")


  const [dataform, setDataForm] = useState({
      montant:"",
      type:"depot"
    })
  
  
    function hendleChange(e){
      const newdata={...dataform}
      newdata[e.target.name]=e.target.value
      setDataForm(newdata)
      console.log(newdata)
    }

    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await axios.post(`http://localhost:6060/client/createTransaction`, dataform, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      console.log(res.data)
  
      if (res.data) {
        toast.success("Depot effectué avec succès")
        // navigate('/admin/dashboard')
      } else {
  
        toast.error("Erreur de depot")
      }
    }
  return (
    <div>
       
                   <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Dépôt</h1>
                    <form 
                  onSubmit={(e)=>handleSubmit(e)}  
                  >
                    <div className="py-4 px-8">

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Montant</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" 
                            type="number"
                            onChange={(e)=>hendleChange(e)}
                            name="montant"
                                value={dataform.montant}
                                placeholder="Monton" />
            
                        </div>

                    

                            
                        <div className="mb-4">
                            <button
                            type='submit'
                                className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
                   
                  </div>
    </div>
  )
}

export default Depot