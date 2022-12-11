
import React, { useState, useEffect, createContext } from 'react';
const AdminMedicDataHandler = ({ medicData }) => {
  
    return (
      
      <div className='patient-mediclist-container'>
        
        
        
          
          <p>Id: {medicData.id}</p>
          <p>Name: {medicData.name}</p>
          <p>Specialty: {medicData.specialty}</p>
          <p>CRM: {medicData.crm}</p>
          <p>Tel: {medicData.tel}</p>
          <p>Email: {medicData.email}</p>
          <p>Password: {medicData.password}</p>
          
          
        
        {/* <p>Medic Name: {medicData.medic_id.name}</p>
        <p>Specialty: {medicData.medic_id.specialty}</p> */}
        
        
      </div>
    );
  };
  
  export default AdminMedicDataHandler;