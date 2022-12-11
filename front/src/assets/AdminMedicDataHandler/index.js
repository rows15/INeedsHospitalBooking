
import React, { useState, useEffect, createContext } from 'react';
const AdminMedicDataHandler = ({ medicData }) => {
  console.log(medicData)
    return (
      
      <>
        <p>oi</p>
        
        
          
          <p>Id: {medicData.id}</p>
          
          
        
        {/* <p>Medic Name: {medicData.medic_id.name}</p>
        <p>Specialty: {medicData.medic_id.specialty}</p> */}
        
        
      </>
    );
  };
  
  export default AdminMedicDataHandler;