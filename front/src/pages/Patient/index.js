/* import Home from '../../component/Home';
import './style.css'; */
import api from '../../services/api.js';
import React, { useState, useEffect, createContext } from 'react';
import PatientBookingDataHandler from '../../assets/PatientBookingDataHandler/index.js';
import "./styles.css"

const Patient = () => {
    const [medics, setMedics] = useState([]);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        
        
        
        
      }, []);
    


      function getId() {
        try {
          let user = JSON.parse(localStorage.getItem('signed'));
          return user.id;
        } catch (error) {
          return '';
        }
      }

      function getRole() {
        try {
          let user = JSON.parse(localStorage.getItem('signed'));
          return user.role;
        } catch (error) {
          return '';
        }
      }


    async function callApiListAllMedics() {
        try {
          const URL = `/medic/search`;
          const response = await api.get(URL);
          setMedics(response.data);
          
          
        } catch (error) {}
      }
    async function callApiListBookingsByPacientId() {
        try {
            const URL = `/book/patient/${getId()}`;
            
            const response = await api.get(URL);
            setBookings(response.data);
            
            
        } catch (error) {}
    }
    
    const handleBooking = (medic_id) =>{
      const initialDate = document.getElementById('admin-input-booking-date').value
      try {
        const URL = `/book/new`;
        
        api.post(URL,{
          role:getRole(),
          initialDate:initialDate,
          patient_id:getId(),
          medic_id:medic_id
        });
        
        
        
    } catch (error) {}
    }
    


  return (
    <div className="pacient-container">
      <title>Patient Page</title>
      <p>Patient page</p>
      <div>List all Reservations</div>
      <button onClick={() => callApiListBookingsByPacientId()}>List Reservations</button><button onClick={() => setBookings([])}>Clear List</button>
      {console.log(bookings)}
      {bookings.sort((a,b) => a.initialDate > b.initialDate).map(item => (
      <div className='patient-bookings-container' key={item.id}>
      {/* <p>Id: {item.id}</p> */}
      
      <PatientBookingDataHandler  medicData={item} />
      
      </div>
      ))}
      <div>List medics by specialty</div>
      <button onClick={() => callApiListAllMedics()}>List Medics</button><button onClick={() => setMedics([])}>Clear List</button>
      {/*############# Criar check se existem médicos############## */}
      {medics.sort((a,b) => a.specialty > b.specialty).map(item => (
      <div className='patient-mediclist-container' key={item.id}>
      {/* <p>Id: {item.id}</p> */}
      <p>Name: {item.name}</p>
      <p>Specialty: {item.specialty}</p>
      <div className='inline-div'>
        <p>Create Reservation:</p> 
        <input type='text' id="admin-input-booking-date" placeholder='Format: yyyy-MM-dd hh:mm:ss'></input> 
        <button onClick={() => handleBooking(item.id)}>Book</button>
      </div>
      </div>
      ))}

      
      
      
    </div>
  );
};

export default Patient;