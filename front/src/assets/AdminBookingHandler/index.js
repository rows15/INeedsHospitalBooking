import format from 'date-fns/format'
import api from '../../services/api.js';
import { useState } from 'react';


const handleCancel = (id) =>{
  try {
    const URL = `/book/${id}`;
    api.delete(URL);
   
  } catch (error) {}
}

const handleReschedule = (id) =>{
  try {
    const URL = `/book/edit`;
    api.put(URL,{
      id:id,
      initialDate:document.getElementById('edit-booking-date').value

    });
   
  } catch (error) {}
}


const AdminBookingDataHandler = ({ bookingData }) => {
  const [showEditingMenu,setShowEditingMenu] = useState(false)
    var convertedDate = format(new Date(bookingData.initialDate),"dd/MM/yyyy HH:mm")
    return (
      <div className='patient-mediclist-container'>
        
        <p>Data Inicial: {String(convertedDate)} {showEditingMenu &&  <input type='text' placeholder='yyyy-mm-dd hh:mm:ss' id="edit-booking-date"></input>           } </p>
        <p>Patient Id and Name: {bookingData.patient_id.id} , {bookingData.patient_id.name}</p>
        <p>Medic Id and Name: {bookingData.medic_id.id} , {bookingData.medic_id.name}</p>
        <p>Specialty: {bookingData.medic_id.specialty}</p>
        <div className='inline-div'><button onClick={() => setShowEditingMenu(true)}>Show Rescheduler</button><button onClick={() => setShowEditingMenu(false)}>Hide</button><button onClick={() => handleReschedule(bookingData.id)} >Edit</button><button onClick={() => handleCancel(bookingData.id)}>Cancel Reservation</button></div>
        
      </div>
    );
  };
  
  export default AdminBookingDataHandler;