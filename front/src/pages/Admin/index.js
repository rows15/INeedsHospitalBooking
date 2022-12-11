/* import Home from '../../component/Home';
import './style.css'; */
import api from '../../services/api.js';
import React, { useState, useEffect, createContext } from 'react';
import AdminMedicDataHandler from '../../assets/AdminMedicDataHandler/index.js';
import "./styles.css"
import AdminBookingDataHandler from '../../assets/AdminBookingHandler/index.js';

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
    async function callApiListAllBookings() {
        try {
            const URL = `/book`;
            const response = await api.get(URL);
            setBookings(response.data);
            console.log(response.data)
            
            
        } catch (error) {}
    }
    async function callApiListBookingsByPacientId(id) {
        try {
            const URL = `/book/patient/${id}`;
            const response = await api.get(URL);
            setBookings(response.data);
            
            
            
        } catch (error) {}
    }

    async function callApiListBookingsByMedicId(id) {
        try {
            const URL = `/book/medic/${id}`;
            const response = await api.get(URL);
            setBookings(response.data);
            
            
            
        } catch (error) {}
    }

    async function callApiListBookingsByDate(date) {
        try {
            console.log(date)
            const URL = `/book/date/${date}`;
            const response = await api.get(URL);
            setBookings(response.data);
            console.log(response.data)
            
            
            
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
      <div>List Medics</div>
      <button onClick={() => callApiListAllMedics()} value="1">All medics</button> <button onClick={() => callApiListMedicsBySpecialty(document.getElementById('admin-input-medic-specialty').value)} value="2">Search by specialty</button> <input type='text' id="admin-input-medic-specialty"></input> <button onClick={() => setMedics([])} value="3">Clear List</button>
      <div>{medics.map( (item) => <AdminMedicDataHandler medicData={item}/> )}</div>
      
      
      



      <div>List Reservations</div>
      <button onClick={() => callApiListAllBookings()} value="1">All Bookings</button> <button onClick={() => callApiListBookingsByPacientId(document.getElementById('admin-input-patient-id').value)} value="2">Search by Patient Id</button> <input type='text' id="admin-input-patient-id"></input> <button onClick={() => callApiListBookingsByMedicId(document.getElementById('admin-input-medic-id').value)} value="2">Search by Medic Id</button> <input type='text' id="admin-input-medic-id"></input> <button onClick={() => callApiListBookingsByDate(document.getElementById('admin-input-booking-date').value)} value="2">Search by Date</button> <input type='text' placeholder='yyyy-mm-dd' id="admin-input-booking-date"></input><button onClick={() => setBookings([])} value="3">Clear List</button>
      <div>{bookings.map((item) => <AdminBookingDataHandler bookingData={item} />)}</div>
      
    </div>
  );
};

export default Admin;