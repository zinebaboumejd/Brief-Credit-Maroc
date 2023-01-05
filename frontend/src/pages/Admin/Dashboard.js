import React,
{ useState, useEffect } from 'react'
  
// import { Link } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

export default function Dashboard() {

    const [data, setData] = useState([]);
    // get user 
    const GetClient = () => {
        fetch('http://localhost:6060/admin/getclient')
            .then(response => response.json())
            .then(data => setData(data))
    }
    useEffect(() => {

        GetClient()

  
}, [])


  return (
    <div>
      <SideBar/>
      <div x-data="GetClient()" >
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

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
                          <p class="font-semibold">{client.nom}</p>

                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3">
                     
                          <p class="font-semibold">{client.email}</p>

                       
                      
                    </td>
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        
                        <div>
                          <p class="font-semibold">Email</p>
                        </div>
                      </div>
                    </td>

                    <td class="px-4 py-3 text-sm">$solde</td>
                    
                    <td class="px-4 py-3 text-sm">15-01-2021</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
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
</div>
     
   
  )
}
