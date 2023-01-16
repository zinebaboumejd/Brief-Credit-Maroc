import React ,{useEffect,
    useState
}from 'react'
import SideBar from '../../components/sidebar/SideBar'
import moment from 'moment'
function GetClinet() {
    const [data, setData] = useState([]);
    // fonction getclien
    function getClient(){
        const token = localStorage.getItem("token")
        console.log(token)
        fetch("http://localhost:6060/admin/getclient",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    }
    // foncion pour activer status si status==="desactive" et desactiver si status ==="active" 
    function activeStatus(id){
        const token = localStorage.getItem("token")
         fetch(`http://localhost:6060/admin/acceptecomptclient/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            getClient()
        })
    }

// desactiver status

    function desactiveStatus(id){
        const token = localStorage.getItem("token")
        fetch(`http://localhost:6060/admin/desactivercomptclient/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            getClient()
        })
    }

    useEffect(() => {
        getClient()
    }, [])

  return (
    <div>
        {/* <SideBar/> */}
        
        <div class=" pt-52 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

<div class="mt-4 mx-4">
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">email</th>
              <th class="px-4 py-3">solde</th>
              <th class="px-4 py-3">Date Creation</th>
              <th class="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {data.map((client) => (
           
            <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  {/* <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                  </div> */}
                  <div>
                    <p class="font-semibold">{client.nom} {client.prenom}</p>

                  </div>
                </div>
              </td>
              <td class="px-4 py-3">
               
                    <p class="font-semibold">{client.email}</p>

                 
                
              </td>
                <td class="px-4 py-3 text-sm">
                {client.solde}
                </td>
                <td class="px-4 py-3 text-sm">
            {/* afficher data  annee-mois-jour */}
                {moment(client.dateCreation).format('YYYY-MM-DD hh:mm:ss ')}
                            </td>
              <td class="px-4 py-3 text-xs">
                {/* button et tester si status active afficher color veres sinon aficher color rouge */}
                {client.status==="active" ? <button onClick={()=>desactiveStatus(client._id)} class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> {client.status} </button> : <button onClick={()=>activeStatus(client._id)} class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100"> {client.status} </button>}

                

                {/* <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> {client.status} </span> */}
              </td>
            </tr>
           
            ))} 
          </tbody>
        </table>
      </div>
      
</div>
</div>
</div>
      
    </div>
  )
}

export default GetClinet