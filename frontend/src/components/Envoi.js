import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify';


function Envoi() {
    const id=localStorage.getItem("_id")
    const token=localStorage.getItem("token")
    const role=localStorage.getItem("role")
  
  
    const [dataform, setDataForm] = useState({
        montant:"",
        receveur:"",
        type:"envoi"
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
        } else {
    
          toast.error("Erreur de depot")
        }
      }
  return (
    <div>
       <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Envoi</h1>
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
                            <label className="block text-grey-darker text-sm font-bold mb-2">Numéro receveur </label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" 
                                 type="text"
                                 onChange={(e)=>hendleChange(e)}
                                 
                                  name="receveur"
                                value={dataform.receveur}
                                placeholder="RIP ID" />
                      
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">Type de Operation</label>
                            <input className=" border rounded w-full py-2 px-3 text-grey-darker" 
                               type="text"
                                // onChange={(e)=>hendleChange(e)}
                                name="type"
                                // value="envoi" 
                                defaultValue={dataform.type}

                                placeholder="envoi" />                    
                        </div> */}


                            
                        <div className="mb-4">
                            <button
                            type='submit'
                                className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>

 </div>
    </div>
  )
}

export default Envoi