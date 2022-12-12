
import React, { useState, useEffect, createContext } from 'react';
import api from '../../services/api.js';
const AdminMedicDataHandler = ({ medicData }) => {

  const [showEditingMenu,setShowEditingMenu] = useState(false)

  const handleEdit = async (id) => {
    try {
      
      
      
      
          
          const email = document.getElementById('edit-user-email').value
          const tel = document.getElementById('edit-user-tel').value
          const name = document.getElementById('edit-user-name').value
          const password = document.getElementById('edit-user-password').value
          const crm = document.getElementById('edit-user-crm').value
          const specialty = document.getElementById('edit-user-specialty').value
          
          const URL = `/admin/edit`;
          
            const response = await api.put(URL,{
                           id:id,
                           role:'medic',
              ...(name && {name:name}),
              ...(email && {email:email}),
              ...(tel && {tel:tel}),
              ...(password && {password:password}),
              ...(crm && {crm:crm}),
              ...(specialty && {specialty:specialty})
            });
            console.log(response)
            
            
            
            /* email:email,
            tel:tel,
            name:name,
            password:password,
            crm:crm,
            specialty:specialty */


          
          
        } catch (error) {
          
        }
  }


  return (

    <div className='patient-mediclist-container'>




      <p>Id: {medicData.id}  </p>
      <p>Name: {medicData.name}              {showEditingMenu &&  <input type='text' id="edit-user-name"></input>           }    </p>
      <p>Specialty: {medicData.specialty}    {showEditingMenu &&  <input type='text' id="edit-user-specialty"></input>      }    </p>
      <p>CRM: {medicData.crm}                {showEditingMenu &&  <input type='text' id="edit-user-crm"></input>            }    </p>
      <p>Tel: {medicData.tel}                {showEditingMenu &&  <input type='text' id="edit-user-tel"></input>            }    </p>
      <p>Email: {medicData.email}            {showEditingMenu &&  <input type='text' id="edit-user-email"></input>          }    </p>
      <p>Password: {medicData.password}      {showEditingMenu &&  <input type='text' id="edit-user-password"></input>       }    </p>


      <button onClick={() => setShowEditingMenu(true)}>Show Menu</button><button onClick={() => setShowEditingMenu(false)}>Hide Menu</button><button onClick={() => handleEdit(medicData.id)}>Edit</button>





    </div>
  );
};

export default AdminMedicDataHandler;