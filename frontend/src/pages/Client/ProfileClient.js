import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { toast } from 'react-toastify';
import Envoi from '../../components/Envoi'
import Depot from '../../components/Depot'
import Retrait from '../../components/Retrait'


function ProfileClient() {
  const id=localStorage.getItem("_id")
  const token=localStorage.getItem("token")
  const role=localStorage.getItem("role")


  const [data, setData] = useState([])
  const[showtab, setShowtab]= useState(0);



  const handletab = (event)=>{
    setShowtab(event);
    // console.log(e)
      }

 

  useEffect(() => {
      const getItem=async()=>{
          const res=await axios.get(`http://localhost:6060/client/getClientById/${id}`)
          setData(res.data)
          console.log(res.data)
          // console.log(res.data.nom)
      }
    
      getItem(id)
  }, [])


    
  return (
    <>


<main className="profile-page pt-96 z-0">

  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              {/* <div className="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
              </div> */}
            </div>
  
         
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {data.nom} {data.prenom}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {data.email}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Solde</span>
                  <span className="text-base font-bold block uppercase tracking-wide text-blueGray-600">{data.solde}</span>
                </div>
                <div className="mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Status</span>
                  <span className="text-base block uppercase tracking-wide text-blueGray-600 px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">{data.status}</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Date Creation</span>
                  <span className="text-base font-bold block uppercase tracking-wide text-blueGray-600"> {moment(data.dateCreation).format('YYYY-MM-DD hh:mm:ss ')}</span>
                </div>
              </div>            </div>
            <div className="mb-2 text-blueGray-600">
              <button className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150' 
              type="button">
                <Link to='/releve'>Releve</Link>
               </button>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
              {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Connect
                </button>
              </div>
            </div> */}






<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Envoi</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div  className="flex items-center flex-wrap ">
                    <button 
                       onClick={()=>handletab(1)}
                      id='Envoi'
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                 
                  </div>
                </div>
              </div>
            </div>
            
           
            <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Retrait</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <button
                      id='Retrait'
                      onClick={()=>handletab(2)}
                       className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</button>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Dépôt</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <button 
                      id='Depot'
                      onClick={()=>handletab(3)}
                      className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                     
                    </div>
                  </div>
                </div>
              </div>
            


              <div className=
              {showtab===1? "flex flex-wrap justify-center lg:pl-52":"hidden"}>     
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
               
                  <Envoi/>
                
              </div>
              </div>

              <div className={showtab===2? "flex flex-wrap justify-center lg:pl-52":"hidden"}>
                 <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <Retrait/>
                </div>
             </div>
              <div className={showtab===3? " flex flex-wrap justify-center lg:pl-52 ":"hidden"}>
            
                  <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                 <Depot/>
                  </div>
                  </div>
                  
             




          </div>
        </div>
      </section>












                <a href="#pablo" className="font-normal text-pink-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  </section>
</main>

    </>
  )
}

export default ProfileClient