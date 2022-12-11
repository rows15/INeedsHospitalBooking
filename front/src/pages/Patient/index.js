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
        
        callApiListAllMedics();
        callApiListBookingsBuPacientId();
        
      }, []);
    
    async function callApiListAllMedics() {
        try {
          const URL = `/medic/search`;
          const response = await api.get(URL);
          setMedics(response.data);
          
          
        } catch (error) {}
      }
    async function callApiListBookingsBuPacientId() {
        try {
            const URL = `/book/patient/${3}`;
            const response = await api.get(URL);
            setBookings(response.data);
            
            
        } catch (error) {}
    }
    
  return (
    <div id='page-container'>
      <title>Patient Page</title>
      <p>Patient page</p>
      <div>List all Reservations</div>
      {console.log(bookings)}
      {bookings.sort((a,b) => a.initialDate > b.initialDate).map(item => (
      <div className='patient-bookings-container' key={item.id}>
      {/* <p>Id: {item.id}</p> */}
      
      <PatientBookingDataHandler  medicData={item} />
      
      </div>
      ))}
      <div>List medics by specialty</div>
      
      {/*############# Criar check se existem médicos############## */}
      {medics.sort((a,b) => a.specialty > b.specialty).map(item => (
      <div className='patient-mediclist-container' key={item.id}>
      {/* <p>Id: {item.id}</p> */}
      <p>Name: {item.name}</p>
      <p>Specialty: {item.specialty}</p>
      </div>
      ))}

      
      
      
    </div>
  );
};

export default Patient;