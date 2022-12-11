/* import Home from '../../component/Home';
import './style.css'; */
import api from '../../services/api.js';
import React, { useState, useEffect, createContext } from 'react';
import AdminMedicDataHandler from '../../assets/AdminMedicDataHandler/index.js';
import "./styles.css"

const Admin = () => {
    const [medics, setMedics] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [reload, setReload] = useState()
    useEffect(() => {
        
        
        
        
      }, []);
    
    async function callApiListAllMedics() {
        try {
          const URL = `/medic/search`;
          const response = await api.get(URL);
          setMedics(response.data);
          
          
        } catch (error) {}
      }

      async function callApiListMedicsBySpecialty(specialty) {
        try {
          const URL = `/medic/search/${specialty}`;
          const response = await api.get(URL);
          setMedics(response.data);
          
          
        } catch (error) {}
      }

    async function callApiListBookingsBuPacientId(id) {
        try {
            const URL = `/book/patient/${id}`;
            const response = await api.get(URL);
            setBookings(response.data);
            
            
        } catch (error) {}
    }
    const handleReload =() =>{
        console.log(medics)
        setReload(!reload)
    }
    /* const handleChangeMedicList = (value) =>{
        switch (value){
            case "1": 
            callApiListAllMedics();
            
            case "2":   
                         
            case "3": 
            ;

            default: console.log("aaaaaaaa")
        }} */
    
    
  return (
    <div id='page-container'>
      <title>Admin Page</title>
      <p>Admin page</p>
      <div>List medics</div>
      <button onClick={() => callApiListAllMedics()} value="1">All medics</button> <button onClick={() => callApiListMedicsBySpecialty("clinico")} value="2">Search by specialty</button> <input type='text' id="admin-input-medic-specialty"></input> <button onClick={() => setMedics([])} value="3">Clear List</button>
      <div>{medics.map( (item) => <AdminMedicDataHandler medicData={item}/> )}</div>
      
      



      <div>List all Reservations By Patient Id</div>
      
      
      
    </div>
  );
};

export default Admin;