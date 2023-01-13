import React, { useState, useEffect } from 'react';

function Releve() {
// fetch data from api
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6060/client/getTransactions',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log(error);
            }
            );
            console.log(data);
         
    }, []);
  return (
    <div>
        
        <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
    <div class="flex flex-col justify-center h-full">
 
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <div class="font-semibold text-gray-800">un relevé bancaire </div>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th></th>
                            <th class="p-2">
                                <div class="font-semibold text-left">Nom</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-left">Monton</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-left">type</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Receveur</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                   {data.map (item => ( 

                 
                        <tr>
                            <td class="p-2">
                                <input type="checkbox" class="w-5 h-5" value="id-1"
                                    />
                            </td>
                            <td class="p-2">
                                <div class="font-medium text-gray-800">
                                    {item.nom}
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">{item.montant}</div>
                            </td>
                            <td class="p-2">

                                <div class="text-left font-medium text-green-500">{item.type}</div>
                            </td>
   {/* tester si  receveur exeste afficher id receveur si non aficher ----- */}
                    
                           {
                                 item.receveur ?
                                    <td class="p-2 grid justify-items-center  ">
                                        <div class="text-left">{item.receveur}</div>
                                    </td>
                                    :
                                    <td class="p-2 grid justify-items-center ">
                                        <div class="text-left">-----</div>
                                    </td>

                           }

                        </tr>
  ))}
                      
                     
                    </tbody>
                </table>
            </div>

      
         

            <div class="flex justify-end">
                <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Releve